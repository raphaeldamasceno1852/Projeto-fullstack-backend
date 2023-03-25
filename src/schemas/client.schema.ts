import * as yup from "yup";
import { SchemaOf } from "yup";
import { IClientRequest, IClientResponse } from "../interfaces/clients";

const CreateClientSchema: SchemaOf<IClientRequest> = yup.object().shape({
    fullname: yup.string().required(),
    email: yup.string().email().required(),
    telefone: yup.string().required()
})

const ReturnClientSchema: SchemaOf<IClientResponse> = yup.object().shape({
    id: yup.string(),
    fullname: yup.string(),
    email: yup.string().email(),
    telefone: yup.string(),
    registeredAt: yup.date(),
    updatedAt: yup.date(),
    deletedAt: yup.date().nullable(true),
    user: yup.object()
})

const ListClientsSchema: SchemaOf<IClientResponse[]> = yup.array(ReturnClientSchema)


export { CreateClientSchema, ReturnClientSchema, ListClientsSchema };

