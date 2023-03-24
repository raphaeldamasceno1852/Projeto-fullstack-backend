import 'dotenv/config';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from './entities/user.entity';
import { InitialMigration1679664273283 } from './migrations/1679664273283-InitialMigration';

const dataSourceConfig = (): DataSourceOptions => {

    const dbUrl: string | undefined = process.env.DATABASE_URL;

    if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL' ");

    const nodeEnv: string | undefined = process.env.NODE_ENV;

    if (nodeEnv === 'test') {
        return {
            type: 'sqlite',
            database: ':memory:',
            synchronize: true,
            entities: [User],
        };
    }

    return {
        type: 'postgres',
        url: dbUrl,
        synchronize: false,
        logging: true,
        entities: [User],
        migrations: [InitialMigration1679664273283],
    };
};

export const AppDataSource = new DataSource(dataSourceConfig());