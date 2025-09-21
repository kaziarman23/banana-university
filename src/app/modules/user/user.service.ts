import configs from "../../configs";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoBD = async (password: string, studentData: TStudent) => {
  // creating a new obj
  const userData: Partial<TUser> = {};

  // setting default password if password is not given
  userData.password = password || (configs.default_password as string);

  // setting user role
  userData.role = "student";

  // set manual id
  userData.id = "2030100001";

  // creating user
  const newUser = await User.create(userData);

  // creating student
  if (Object.keys(newUser).length) {
    // set id and _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserService = {
  createStudentIntoBD,
};
