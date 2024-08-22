import { userController } from "./controller";
import { Router } from "express";

const userRouter = Router();

userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getUser);
userRouter.post("/", userController.createUser);
userRouter.put("/:id", userController.updateUser);

export {userRouter}