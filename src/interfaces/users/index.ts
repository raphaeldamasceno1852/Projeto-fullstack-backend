export interface IUserRequest {
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
}

export interface IUserResponse {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string
    isAdm: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date
}

export interface IUpdateUser {
    firstName?: string
    lastName?: string
    email?: string
    password?: string
    phone?: string
}