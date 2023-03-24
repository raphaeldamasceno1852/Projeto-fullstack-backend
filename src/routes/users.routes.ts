import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, retrieveUserController, updateUserController } from "../controllers/users.controller";
import authMiddleware from "../middlewares/authMiddleware";
import ensureIsAdimnMiddleware from "../middlewares/ensureIsAdmin.middleware";
import ensureIsAdminOrOwnerMiddleware from "../middlewares/ensureIsOwnerOrAdm.middleware";
import userExistsMiddleware from "../middlewares/userExists.middleware";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { CreateUserSchema } from "../schemas/users.serializers";

const usersRouter = Router();

usersRouter.post("", userExistsMiddleware, validateDataMiddleware(CreateUserSchema), createUserController);
usersRouter.get("", authMiddleware, ensureIsAdimnMiddleware, listUsersController)
usersRouter.get("/:id", authMiddleware, ensureIsAdminOrOwnerMiddleware, retrieveUserController)
usersRouter.patch("/:id", authMiddleware, ensureIsAdminOrOwnerMiddleware, updateUserController)
usersRouter.delete("/:id", authMiddleware, ensureIsAdminOrOwnerMiddleware, deleteUserController)

export default usersRouter;
