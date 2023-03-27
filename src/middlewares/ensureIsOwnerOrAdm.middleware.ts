import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";

const ensureIsAdminOrOwnerMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    if (req.body.user.isAdm || req.params.id == req.body.user.id) {
        return next();
    }
    
    throw new AppError("You dont have permission", 401);
};

export default ensureIsAdminOrOwnerMiddleware