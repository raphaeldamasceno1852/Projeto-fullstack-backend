import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/login";
import loginService from "../Services/login/login.service";


const loginController = async (req: Request, res: Response) => {
    const loginUser: IUserLogin = req.body
    const token: string = await loginService(loginUser)
    return res.json({ token })
}

export { loginController };

