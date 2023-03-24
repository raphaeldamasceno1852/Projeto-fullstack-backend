import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    let token = req.headers.authorization

    if (!token) {
        return res.status(401).json({ message: 'invalid token' })
    }

    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
        if (error) {
            return res.status(401).json({ message: error.message })
        }

        req.body.user = {
            id: decoded.sub,
            isAdm: decoded.isAdm
        }

        return next()
    })
}

export default authMiddleware