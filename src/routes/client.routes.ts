import { Router } from "express";
import { createClientsController, deleteClientController, listClientsController, retrieveClientsByIdController, updateClientController } from "../controllers/clients.controller";
import authMiddleware from "../middlewares/authMiddleware";
import ensureClientExistsMiddleware from "../middlewares/ensureClientExist.middleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import ensureIsAdminOrOwnerMiddleware from "../middlewares/ensureIsOwnerOrAdm.middleware";

const clientsRouter = Router()

clientsRouter.post("", ensureClientExistsMiddleware, authMiddleware, createClientsController)
clientsRouter.get("", authMiddleware, ensureIsAdminMiddleware, listClientsController)
clientsRouter.get("/users/:id", authMiddleware, ensureIsAdminOrOwnerMiddleware, retrieveClientsByIdController)
clientsRouter.patch("/:client_id/users", authMiddleware, updateClientController)
clientsRouter.delete("/:client_id/users", authMiddleware, deleteClientController)


export default clientsRouter