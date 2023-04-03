import cors from "cors";
import express from "express";
import "express-async-errors";
import "reflect-metadata";
import handleError from "./errors/handleError";
import clientsRouter from "./routes/client.routes";
import loginRouter from "./routes/login.routes";
import usersRouter from "./routes/users.routes";
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'

const app = express();
app.use(express.json())
app.use(cors())
app.use("/login", loginRouter)
app.use("/users", usersRouter)
app.use("/clients", clientsRouter)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use(handleError)

export default app