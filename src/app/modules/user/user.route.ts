import express from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import { createStudentValidationSchema } from "../student/student.validation";

const router = express.Router();

// get route
router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getSingleUser);

// post route
router.post(
  "/create-student",
  validateRequest(createStudentValidationSchema),
  userController.createStudent
);

// patch route
router.patch("/update-user", userController.updateUser);

// delete route
router.delete("/:userId", userController.deleteUser);

export const UserRoutes = router;
