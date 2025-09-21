import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

// get route
router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getSingleUser);

// post route
router.post("/create-user", userController.createStudent);

// patch route
router.patch("/update-user", userController.updateUser);

// delete route
router.delete("/:userId", userController.deleteUser);

export const UserRoutes = router;
