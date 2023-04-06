import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";

const verifyUserExitsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id: req.body.user.id
    })
    
        if (!user) {
            throw new AppError("you don't have authorization", 403)
        }

        return next()
}

export default verifyUserExitsMiddleware