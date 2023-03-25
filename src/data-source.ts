import 'dotenv/config';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Client } from './entities/client.entity';
import { User } from './entities/user.entity';
import { InitialMigration1679664273283 } from './migrations/1679664273283-InitialMigration';
import { CreateClientsTable1679779758551 } from './migrations/1679779758551-CreateClientsTable';

const dataSourceConfig = (): DataSourceOptions => {

    const dbUrl: string | undefined = process.env.DATABASE_URL;

    if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL' ");

    const nodeEnv: string | undefined = process.env.NODE_ENV;

    if (nodeEnv === 'test') {
        return {
            type: 'sqlite',
            database: ':memory:',
            synchronize: true,
            entities: [User, Client],
        };
    }

    return {
        type: 'postgres',
        url: dbUrl,
        synchronize: false,
        logging: true,
        entities: [User, Client],
        migrations: [InitialMigration1679664273283, CreateClientsTable1679779758551],
    };
};

export const AppDataSource = new DataSource(dataSourceConfig());