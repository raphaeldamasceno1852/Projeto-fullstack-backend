import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserResponse } from "../../interfaces/users";
import { ReturnCreateUserSchema } from "../../schemas/user.serializers";

const createUserService = async (userdata: IUserResponse): Promise<IUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = userRepository.create(userdata)

    await userRepository.save(user)

    const userValidated = await ReturnCreateUserSchema.validate(user, {
        stripUnknown: true,
    })

    return userValidated
}

export default createUserService