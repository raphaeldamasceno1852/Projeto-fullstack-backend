import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../data-source';
import { User } from '../entities/user.entity';

interface AuthRequest extends Request {
    userId?: string;
}

export const refreshToken = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction,
) => {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET);

        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOneBy({ id: decodedToken.userId });

        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        req.userId = user.id;

        next();
};
