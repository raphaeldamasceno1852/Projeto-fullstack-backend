import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { IUserWithClients } from "../../interfaces/users"
import { UserWithClientsSchema } from "../../schemas/user.serializers"

const retrieveClientsByIdService = async (userId: string): Promise<IUserWithClients> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOne({
        where: {
            id: userId
        },
        relations: {
            clients: true
        },
    })

    if (!user) {
        throw new AppError("User not found", 404)
    }

    const retrieveUser = await UserWithClientsSchema.validate(user, {
        stripUnknown: true
    })

    return retrieveUser
}

export default retrieveClientsByIdService