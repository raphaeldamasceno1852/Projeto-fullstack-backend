import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserResponse } from "../../interfaces/users"
import { ListUsersSchema } from "../../schemas/user.serializers"

const listUsersService = async (): Promise<IUserResponse[]> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const users: Array<User> = await userRepository.find({
        withDeleted: true
    })

    const listUsersValidate = await ListUsersSchema.validate(users, {
        stripUnknown: true
    })

    return listUsersValidate
}

export default listUsersService