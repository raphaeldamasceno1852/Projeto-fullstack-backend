import { Request, Response } from "express";
import { IUserResponse } from "../interfaces/users";
import createUserService from "../services/users/createuser.service";

const createUserController = async (req: Request, res: Response) => {
    const userData: IUserResponse = req.body;
    const newUser = await createUserService(userData);
    return res.status(201).send(newUser)
}

export {createUserController}