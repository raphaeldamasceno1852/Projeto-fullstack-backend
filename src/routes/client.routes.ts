import { Router } from "express";
import { createClientsController } from "../controllers/clients.controller";
import authMiddleware from "../middlewares/authMiddleware";
import ensureClientExistsMiddleware from "../middlewares/ensureClientExist.middleware";

const clientsRouter = Router()

clientsRouter.post("", ensureClientExistsMiddleware, authMiddleware, createClientsController)


export default clientsRouter