import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"
import { AppError } from "../../errors/appError"
import { IClientUpdate } from "../../interfaces/clients"
import { ReturnClientSchema } from "../../schemas/client.schema"

const updateClientsService = async (updateData: IClientUpdate, clientId: string) => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client | null = await clientRepository.findOneBy({ id: clientId })

    if (!client) {
        throw new AppError("You don't have authorization", 401)
    }

    const updateClient = clientRepository.create({
        ...client,
        ...updateData
    })

    await clientRepository.save(updateClient)

    const updatedClient = await ReturnClientSchema.validate(updateClient, {
        stripUnknown: true
    })

    return updatedClient
}

export default updateClientsService