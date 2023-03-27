import { Router } from "express";
import { createUserController, deleteUserController, listDeletedUsersController, listUsersController, retrieveUserController, updateUserController } from "../controllers/user.controller";
import authMiddleware from "../middlewares/authMiddleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import ensureIsAdminOrOwnerMiddleware from "../middlewares/ensureIsOwnerOrAdm.middleware";
import userExistsMiddleware from "../middlewares/ensureUserExists.middleware";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { CreateUserSchema } from "../schemas/user.serializers";

const usersRouter = Router(); 

usersRouter.post("", userExistsMiddleware, validateDataMiddleware(CreateUserSchema), createUserController);
usersRouter.get("", authMiddleware, ensureIsAdminMiddleware, listUsersController)
usersRouter.get("", authMiddleware, ensureIsAdminMiddleware, listDeletedUsersController)
usersRouter.get("/:user_id", ensureIsAdminMiddleware, authMiddleware, ensureIsAdminOrOwnerMiddleware, retrieveUserController)
usersRouter.patch("/:user_id", ensureIsAdminMiddleware, authMiddleware, ensureIsAdminOrOwnerMiddleware, updateUserController)
usersRouter.delete("/:user_id", authMiddleware, ensureIsAdminOrOwnerMiddleware, deleteUserController)

export default usersRouter;