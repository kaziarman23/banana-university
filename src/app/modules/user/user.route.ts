import express from "express";

const router = express.Router();

// get route
router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getSingleUser);

// post route
router.post("/create-user", userController.createUser);

// patch route
router.patch("/update-user", userController.updateUser);

// delete route
router.delete("/:userId", userController.deleteUser);

export const UserRoutes = router;
