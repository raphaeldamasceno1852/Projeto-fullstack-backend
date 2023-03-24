import cors from "cors";
import express from "express";
import "express-async-errors";
import "reflect-metadata";
import handleError from "./errors/handleError";
import loginRouter from "./routes/login.routes";
import usersRouter from "./routes/users.routes";

const app = express();
app.use(express.json())
app.use(cors())
app.use("/login", loginRouter)
app.use("/users", usersRouter)
app.use(handleError)

export default app