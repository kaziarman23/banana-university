import { User } from "./user.model";
import { UserService } from "./user.service";
import httpStatus from "http-status";
import sendResponse from "../../Utility/sendResponse";
import catchAsync from "../../Utility/catchAsync";

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users retrieved successfully",
    data: users,
  });
});

const getSingleUser = catchAsync(async (req, res, next) => {
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
});

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body;

  const result = await UserService.createStudentIntoBD(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is created successfully",
    data: result,
  });
});

const updateUser = catchAsync(async (req, res, next) => {
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
});

const deleteUser = catchAsync(async (req, res, next) => {
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
});

export const userController = {
  getAllUsers,
  getSingleUser,
  createStudent,
  updateUser,
  deleteUser,
};
