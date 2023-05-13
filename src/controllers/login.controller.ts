import { Request, Response } from "express";
import { ITokenReturn, IUserLogin } from "../interfaces/login";
import loginService from "../Services/login/login.service";


const loginController = async (req: Request, res: Response) => {
    const loginUser: IUserLogin = req.body
    const loggedKeys: ITokenReturn = await loginService(loginUser)
    return res.json({ token:loggedKeys.token, user: loggedKeys.restUser })
}

export { loginController };

