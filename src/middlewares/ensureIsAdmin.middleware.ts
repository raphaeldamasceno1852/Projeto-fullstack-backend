import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

const ensureIsAdminMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const isAdmin = req.body.user.isAdm

    if (!isAdmin) {
        throw new AppError('missing admin authorizations', 403)
    }

    return next()
}

export default ensureIsAdminMiddleware