import { Request, Response } from "express";
import { IClientResponse } from "../interfaces/clients";
import createClientService from "../Services/clients/createClient.service";

const createClientsController = async (req: Request, res: Response) => {
    const userId: string = req.user.id
    const ClientData: IClientResponse = req.body
    const createClient = createClientService(userId, ClientData)
    return res.status(201).send(createClient)
}

export { createClientsController };
