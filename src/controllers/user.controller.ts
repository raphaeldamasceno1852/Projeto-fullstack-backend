import { Request, Response } from "express";
import { IUpdateUser, IUserResponse } from "../interfaces/users";
import createUserService from "../Services/users/createuser.service";
import deleteUserService from "../Services/users/deleteUser.service";
import listDeletedUsersService from "../Services/users/listUsers.service";
import listUsersService from "../Services/users/listUsers.service";
import retrieveUserService from "../Services/users/retrieveUser.service";
import updateUserService from "../Services/users/updateUser.service";

const createUserController = async (req: Request, res: Response) => {
    const userData: IUserResponse = req.body;
    const newUser = await createUserService(userData);
    return res.status(201).json(newUser)
}

const listUsersController = async (req: Request, res: Response) => {
    const listUsers = await listUsersService()
    return res.status(200).json(listUsers)
}

const listDeletedUsersController = async (req: Request, res: Response) => {
    const listDeletedUsers = await listDeletedUsersService()
    return res.status(200).json(listDeletedUsers)
}

const retrieveUserController = async (req: Request, res: Response) => {
    const userId: string = req.params.id
    const retrieveUser = await retrieveUserService(userId)
    return res.status(200).json(retrieveUser)
}

const updateUserController = async (req: Request, res: Response) => {
    const updateUserData: IUpdateUser = req.body
    const userId: string = req.params.id
    const updateUser = await updateUserService(updateUserData, userId)
    return res.status(200).json(updateUser)
}

const deleteUserController = async (req: Request, res: Response) => {
    const userId: string = req.params.id
    await deleteUserService(userId)
    return res.status(204).json({})
}

export { createUserController, listUsersController, listDeletedUsersController, retrieveUserController, updateUserController, deleteUserController };
