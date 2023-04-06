import { Router } from "express";
import { createClientsController, deleteClientController, listClientsController, retrieveClientsByIdController, updateClientController } from "../controllers/clients.controller";
import authMiddleware from "../middlewares/authMiddleware";
import ensureClientExistsMiddleware from "../middlewares/ensureClientExist.middleware";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { CreateClientSchema } from "../schemas/client.schema";
import verifyUserExitsMiddleware from "../middlewares/verifyUserExists";

const clientsRouter = Router()

clientsRouter.post("", ensureClientExistsMiddleware, validateDataMiddleware(CreateClientSchema), authMiddleware, createClientsController)
clientsRouter.get("/:clientId", authMiddleware, retrieveClientsByIdController)
clientsRouter.patch("/:client_id", authMiddleware, verifyUserExitsMiddleware, updateClientController)
clientsRouter.delete("/:client_id", authMiddleware, verifyUserExitsMiddleware, deleteClientController)


export default clientsRouter