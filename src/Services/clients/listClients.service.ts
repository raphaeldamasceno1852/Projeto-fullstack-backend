import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"
import { IClientResponse } from "../../interfaces/clients"
import { ListClientsSchema } from "../../schemas/client.schema"

const listClientsService = async (): Promise<IClientResponse[]> => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const clients = await clientRepository.find()

    const listClientsValidate = await ListClientsSchema.validate(clients, {
        stripUnknown: true
    })

    return listClientsValidate
}

export default listClientsService