import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { IClientUpdate } from "../../interfaces/clients"
import { ReturnClientSchema } from "../../schemas/client.schema"

const updateClientsService = async (updateData: IClientUpdate, clientId: string, userId: string) => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const user: User | null = await userRepository.findOneBy({
        id: userId
    })

    const client: Client | null = await clientRepository.findOne({
        where: {
            id: clientId
        },
        relations: {
            user: true
        }
    })    

    if (client.user.id !== user.id) {
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