import * as yup from "yup"
import { SchemaOf } from "yup"
import { IUserRequest, IUserResponse } from "../interfaces/users"

export const CreateUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    phone: yup.string().required(),
    isAdm: yup.boolean().notRequired().default(false)
})

export const ReturnCreateUserSchema: SchemaOf<IUserResponse> = yup.object().shape({
    id: yup.string(),
    firstName: yup.string(),
    lastName: yup.string(),
    email: yup.string().email(),
    phone: yup.string(),
    isActive: yup.boolean(),
    isAdm: yup.boolean(),
    createdAt: yup.date(),
    updatedAt: yup.date(),
})

export const ListUsersSchema: SchemaOf<IUserResponse[]> = yup.array(ReturnCreateUserSchema)
