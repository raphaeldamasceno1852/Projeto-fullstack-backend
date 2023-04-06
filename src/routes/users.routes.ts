import { Router } from "express";
import { createUserController, deleteUserController, listUserController, updateUserController } from "../controllers/user.controller";
import authMiddleware from "../middlewares/authMiddleware";
import userExistsMiddleware from "../middlewares/ensureUserExists.middleware";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import verifyUserExitsMiddleware from "../middlewares/verifyUserExists";
import { CreateUserSchema } from "../schemas/user.serializers";

const usersRouter = Router();

usersRouter.post("", userExistsMiddleware, validateDataMiddleware(CreateUserSchema), createUserController);
usersRouter.get("/profile", authMiddleware, listUserController)
usersRouter.patch("/:user_id", authMiddleware, verifyUserExitsMiddleware, updateUserController)
usersRouter.delete("/:user_id", authMiddleware, deleteUserController)

export default usersRouter;