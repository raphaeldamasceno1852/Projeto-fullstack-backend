import { Request, Response } from "express";
import { IClientResponse } from "../interfaces/clients";
import { IUpdateUser } from "../interfaces/users";
import createClientService from "../Services/clients/createClient.service";
import deleteClientsService from "../Services/clients/deleteClients.service";
import listClientsService from "../Services/clients/listClients.service";
import retrieveClientsByIdService from "../Services/clients/listClientsById.service";
import updateClientsService from "../Services/clients/updateClients.service";

const createClientsController = async (req: Request, res: Response) => {
    const clientData: IClientResponse = req.body
    const createClient = await createClientService(clientData)
    return res.status(201).json(createClient)
}

const listClientsController = async (req: Request, res: Response) => {
    const listClients = await listClientsService()
    return res.status(200).json(listClients)
}

const retrieveClientsByIdController = async (req: Request, res: Response) => {
    const clientId: string = req.params.id
    const listClientsById = await retrieveClientsByIdService(clientId)
    return res.status(200).json(listClientsById)
}

const updateClientController = async (req: Request, res: Response) => {
    const updateData: IUpdateUser = req.body
    const clientId: string = req.params.client_id
    const userId: string = req.body.user.id
    const updateClientId = await updateClientsService(updateData, clientId, userId)
    return res.status(200).json(updateClientId)
}

const deleteClientController = async (req: Request, res: Response) => {
    const clientId: string = req.params.client_id
    const userId: string = req.body.user.id
    await deleteClientsService(clientId, userId)
    return res.status(204).json({})
}

export { createClientsController, listClientsController, retrieveClientsByIdController, updateClientController, deleteClientController };

