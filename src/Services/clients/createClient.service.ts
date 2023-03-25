import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { User } from "../../entities/user.entity";
import { IClientResponse } from "../../interfaces/clients";
import { ReturnClientSchema } from "../../schemas/client.schema";

const createClientService = async (userId: string, ClientData: IClientResponse): Promise<IClientResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const user: User | null = await userRepository.findOneBy({
        id: userId
    })

    const client: Client = clientRepository.create({
        ...ClientData,
        ...user!
    })

    await clientRepository.save(client)

    const validatedClient = ReturnClientSchema.validate(client, {
        stripUnknown: true
    })

    return validatedClient
}

export default createClientService