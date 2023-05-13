import { IUserResponse } from "../users"

export interface IUserLogin {
    email: string
    userPassword: string
}

export interface ITokenReturn {
    token: string
    restUser: Omit<IUserResponse, "password">
}