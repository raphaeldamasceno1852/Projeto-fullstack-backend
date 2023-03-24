import { Router } from "express";
import { createUserController, listUsersController } from "../controllers/user.controller";
import authMiddleware from "../middlewares/authMiddleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import userExistsMiddleware from "../middlewares/ensureUserExists.middleware";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { CreateUserSchema } from "../schemas/user.serializers";

const usersRouter = Router();

usersRouter.post("", userExistsMiddleware, validateDataMiddleware(CreateUserSchema), createUserController);
usersRouter.get("", authMiddleware, ensureIsAdminMiddleware, listUsersController)
export default usersRouter;
