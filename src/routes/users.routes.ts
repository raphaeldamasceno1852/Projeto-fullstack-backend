import { Router } from "express";
import { createUserController } from "../controllers/user.controller";
import userExistsMiddleware from "../middlewares/ensureUserExists.middleware";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { CreateUserSchema } from "../schemas/user.serializers";

const usersRouter = Router();

usersRouter.post("", userExistsMiddleware, validateDataMiddleware(CreateUserSchema), createUserController);
export default usersRouter;
