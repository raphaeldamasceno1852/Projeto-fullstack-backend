import { IUserResponse } from "../users"

export interface IUserLogin {
    email: string
    password: string
}

export interface ITokenReturn {
    token: string
    user: IUserResponse
}