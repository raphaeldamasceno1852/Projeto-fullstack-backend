import "reflect-metadata"
import "express-async-errors"
import express from "express";
import handleError from "./errors/handleError";
import usersRouter from "./routers/users.routes";
import loginRouter from "./routers/login.routes";
import cors from "cors"

const app = express();
app.use(express.json())
app.use(cors())
app.use("/login", loginRouter)
app.use("/users", usersRouter)
app.use(handleError)

export default app