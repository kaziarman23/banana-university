import configs from "../../configs";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoBD = async (password: string, payload: TStudent) => {
  // creating a new obj
  const userData: Partial<TUser> = {};

  // setting default password if password is not given
  userData.password = password || (configs.default_password as string);

  // setting user role
  userData.role = "student";

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester
  );

  if (!admissionSemester) {
    throw new Error("Admission semester not found");
  }

  //set  generated id
  userData.id = await generateStudentId(admissionSemester);

  // creating user
  const newUser = await User.create(userData);

  // creating student
  if (Object.keys(newUser).length) {
    // set id and _id as user
    payload.id = newUser.id;
    payload.user = newUser._id;

    const newStudent = await Student.create(payload);
    return newStudent;
  }
};

export const UserService = {
  createStudentIntoBD,
};
