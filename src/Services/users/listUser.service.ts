import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserResponse } from "../../interfaces/users"
import { UserWithClientsSchema } from "../../schemas/user.serializers"

const listUserService = async (userId): Promise<IUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: userId
        },
        relations: {
            clients: true
        }
    })

    const userValidate = await UserWithClientsSchema.validate(user, {
        stripUnknown: true
    })

    return userValidate
}

export default listUserService