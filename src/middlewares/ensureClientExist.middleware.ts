import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Client } from "../entities/client.entity"
import { AppError } from "../errors/appError"

const ensureClientExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    
    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client | null = await clientRepository.findOneBy({
        email: req.body.email
    })

    if (client) {
        throw new AppError("email already exists", 409)
    }

    return next()
}

export default ensureClientExistsMiddleware