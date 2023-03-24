import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";

const userExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        email: req.body.email
    })

    if (user) {
        throw new AppError("email already exists", 409)
    }

    return next()
}

export default userExistsMiddleware