import { NextFunction, Request, Response } from "express";
import { AppError } from "./appError";

const handleError = async (error: Error, req: Request, res: Response, next: NextFunction) => {

    if (error instanceof AppError) {
        return res.status(error.statusCode).send({ message: error.message })
    }


    return res.status(500).send({
        message: 'Internal server error'
    })

}

export default handleError