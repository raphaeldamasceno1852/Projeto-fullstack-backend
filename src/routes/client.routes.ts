import { Router } from "express";
import { createClientsController } from "../controllers/clients.controller";
import authMiddleware from "../middlewares/authMiddleware";

const clientsRouter = Router()

clientsRouter.post("", authMiddleware, createClientsController)

export default clientsRouter