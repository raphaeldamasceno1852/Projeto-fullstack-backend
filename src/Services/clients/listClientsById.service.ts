import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"
import { AppError } from "../../errors/appError"
import { CreateClientSchema } from "../../schemas/client.schema"

const retrieveClientsByIdService = async (clientId: string): Promise<any> => {
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client | null = await clientRepository.findOne({
        where: {
            id: clientId
        },
        relations: {
            user: true
        },
    })

    if (!client) {
        throw new AppError("client not found", 404)
    }

    const retrieveUser = await CreateClientSchema.validate(client, {
        stripUnknown: true
    })

    return retrieveUser
}

export default retrieveClientsByIdService