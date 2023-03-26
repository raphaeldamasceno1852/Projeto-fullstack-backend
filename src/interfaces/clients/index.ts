export interface IClientRequest {
    fullname: string
    email: string
    telefone: string
}

export interface IClientResponse {
    id: string
    fullname: string
    email: string
    telefone: string
    registeredAt: Date
    updatedAt: Date
    deletedAt: Date
    userId: string
}

