import { Request, Response } from "express";
import { IUserResponse } from "../interfaces/users";
import createUserService from "../Services/users/createuser.service";
import listUsersService from "../Services/users/listUsers.service";
import retrieveUserService from "../Services/users/retrieveUser.service";

const createUserController = async (req: Request, res: Response) => {
    const userData: IUserResponse = req.body;
    const newUser = await createUserService(userData);
    return res.status(201).send(newUser)
}

const listUsersController = async (req: Request, res: Response) => {
    const listUsers = await listUsersService()
    return res.status(200).send(listUsers)
}

const retrieveUserController = async (req: Request, res: Response) => {
    const userId: string = req.params.id
    const retrieveUser = await retrieveUserService(userId)
    return res.status(200).send(retrieveUser)
}

export { createUserController, listUsersController, retrieveUserController };
