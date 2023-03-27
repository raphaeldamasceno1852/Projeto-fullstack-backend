import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("clients")
class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({length: 120})
    fullname: string;

    @Column({length: 50})
    email: string;

    @Column({length: 11})
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

