import { Request, Response } from "express";
import { IClientResponse } from "../interfaces/clients";
import createClientService from "../Services/clients/createClient.service";

const createClientsController = async (req: Request, res: Response) => {
    const userId: string = req.body.user.id
    const clientData: IClientResponse = req.body
    const createClient = await createClientService(userId, clientData)
    return res.status(201).send(createClient)
}

export { createClientsController };
