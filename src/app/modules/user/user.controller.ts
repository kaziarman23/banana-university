import { NextFunction, Request, Response } from "express";
import { User } from "./user.model";
import { UserService } from "./user.service";
import httpStatus from "http-status";
import sendResponse from "../../Utility/sendResponse";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    // const user = await User.findById(userId);
    const user = null; // replace with DB call

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Users retrieved successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, student: studentData } = req.body;

    const result = await UserService.createStudentIntoBD(password, studentData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.body; // or from params, depending on how you designed it
    const updateData = req.body;

    // const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
    const updatedUser = { ...updateData, id: userId }; // replace with DB call

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    // const deletedUser = await User.findByIdAndDelete(userId);
    const deletedUser = { id: userId }; // replace with DB call

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  getAllUsers,
  getSingleUser,
  createStudent,
  updateUser,
  deleteUser,
};
