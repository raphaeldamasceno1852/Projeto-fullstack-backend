import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("clients")
class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    fullname: string;

    @Column()
    email: string;

    @Column()
    telefone: string;

    @CreateDateColumn()
    registeredAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @ManyToOne(() => User, user => user.clients)
    user: User
}

export { Client };

