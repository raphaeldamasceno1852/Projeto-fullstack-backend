import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"
import { AppError } from "../../errors/appError"
import { User } from "../../entities/user.entity"

const deleteClientsService = async (clientId: string, userId: string): Promise<void> => {
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

    await clientRepository.delete({id: client.id})
}

export default deleteClientsService