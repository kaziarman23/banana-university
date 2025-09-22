import { StudentServices } from "./student.service";
import sendResponse from "../../Utility/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../Utility/catchAsync";



const createStudent = catchAsync(async (req, res) => {
  const { student: studentData } = req.body;
  const result = await StudentServices.createStudentIntoDB(studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is created succesfully",
    data: result,
  });
});

const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Students are retrieved succesfully",
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Students are retrieved succesfully",
    data: result,
  });
});

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
