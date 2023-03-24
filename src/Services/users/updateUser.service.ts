import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { IUpdateUser, IUserResponse } from "../../interfaces/users"
import { ReturnCreateUserSchema } from "../../schemas/user.serializers"

const updateUserService = async (updateUserData: IUpdateUser, userId: string): Promise<IUserResponse> => {
   
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
   
    const user = await userRepository.findOneBy({
        id: userId
    })

    if (!user) {
        throw new AppError("User not found", 404)
    }

    const updateUser = userRepository.create({
        ...user,
        ...updateUserData
    })

    await userRepository.save(updateUser)

    const validateUpdate = ReturnCreateUserSchema.validate(updateUser, {
        stripUnknown: true
    })

    return validateUpdate
}

export default updateUserService