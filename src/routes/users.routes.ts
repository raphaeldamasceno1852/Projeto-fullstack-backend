import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, retrieveUserController, updateUserController } from "../controllers/user.controller";
import authMiddleware from "../middlewares/authMiddleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import ensureIsAdminOrOwnerMiddleware from "../middlewares/ensureIsOwnerOrAdm.middleware";
import userExistsMiddleware from "../middlewares/ensureUserExists.middleware";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { CreateUserSchema } from "../schemas/user.serializers";

const usersRouter = Router();

usersRouter.post("", userExistsMiddleware, validateDataMiddleware(CreateUserSchema), createUserController);
usersRouter.get("", authMiddleware, ensureIsAdminMiddleware, listUsersController)
usersRouter.get("/:id", ensureIsAdminMiddleware, authMiddleware, ensureIsAdminOrOwnerMiddleware, retrieveUserController)
usersRouter.patch("/:id", ensureIsAdminMiddleware, authMiddleware, ensureIsAdminOrOwnerMiddleware, updateUserController)
usersRouter.delete("/:id", ensureIsAdminMiddleware, authMiddleware, ensureIsAdminOrOwnerMiddleware, deleteUserController)

export default usersRouter;