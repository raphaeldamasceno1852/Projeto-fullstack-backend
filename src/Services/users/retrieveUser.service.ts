import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { IUserResponse } from "../../interfaces/users"
import { ReturnCreateUserSchema } from "../../schemas/user.serializers"

const retrieveUserService = async (userId: string): Promise<IUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id: userId
    })

    if (!user) {
        throw new AppError("User not found", 404)
    }

    const retrieveUser = await ReturnCreateUserSchema.validate(user, {
        stripUnknown: true
    })

    return retrieveUser
}

export default retrieveUserService