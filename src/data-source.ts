import 'dotenv/config';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Client } from './entities/client.entity';
import { User } from './entities/user.entity';
import { InitialMigration1679862117005 } from './migrations/1679862117005-InitialMigration';
import { AlterClientEntity1680526756599 } from './migrations/1680526756599-AlterClientEntity';

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
        migrations: [InitialMigration1679862117005, AlterClientEntity1680526756599],
    };
};

export const AppDataSource = new DataSource(dataSourceConfig());