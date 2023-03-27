import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

const deleteClientsService = async (userId: string, clientId: string): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const user: User | null = await userRepository.findOneBy({
        id: userId
    })

    if (!user) {
        throw new AppError("User not found", 404)
    }

    console.log(user);


    const client: Client | null = await clientRepository.findOne({
        where: {
            id: clientId
        },
        relations: {
            user: true
        }
    })

    if (!client) {
        throw new AppError("Client not found", 404)
    }

    console.log(client);

    if (client.user.isAdm == false || client.user.id != user.id) {
        throw new AppError("You don't have authorization", 403)
    }

    await userRepository.softRemove(client!)
}

export default deleteClientsService