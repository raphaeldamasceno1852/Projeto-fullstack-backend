import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

const deleteUserService = async (userId: string): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    if (!user) {
        throw new AppError('User not found', 404)
    }

    await userRepository.softRemove(user!)

}

export default deleteUserService