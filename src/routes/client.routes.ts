import { Router } from "express";
import { createClientsController, deleteClientController, listClientsController, retrieveClientsByIdController, updateClientController } from "../controllers/clients.controller";
import authMiddleware from "../middlewares/authMiddleware";
import ensureClientExistsMiddleware from "../middlewares/ensureClientExist.middleware";
import ensureIsAdminOrOwnerMiddleware from "../middlewares/ensureIsOwnerOrAdm.middleware";

const clientsRouter = Router()

clientsRouter.post("", ensureClientExistsMiddleware, authMiddleware, createClientsController)
clientsRouter.get("", authMiddleware, listClientsController)
clientsRouter.get("/users/:id", authMiddleware, retrieveClientsByIdController)
clientsRouter.patch("/:client_id", authMiddleware, updateClientController)
clientsRouter.delete("/:client_id", authMiddleware, deleteClientController)


export default clientsRouter