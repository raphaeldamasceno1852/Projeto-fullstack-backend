import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Client } from "../../entities/client.entity"
import { AppError } from "../../errors/appError"

const deleteClientsService = async (clientId: string): Promise<void> => {

    const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOneBy({ id: clientId })

    if (!client) {
        throw new AppError("You don't have authorization", 401)
    }

    await clientRepository.delete({id: client.id})

}

export default deleteClientsService