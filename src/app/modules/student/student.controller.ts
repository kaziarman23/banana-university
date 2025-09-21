import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";
import sendResponse from "../../Utility/sendResponse";
import httpStatus from "http-status";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentServices.createStudentIntoDB(studentData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student is created succesfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Students are retrieved succesfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Students are retrieved succesfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
