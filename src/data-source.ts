import 'dotenv/config';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from './entities/user.entity';
import { initial1679624971699 } from './migrations/1679624971699-initial';

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
        migrations: [initial1679624971699],
    };
};

export const AppDataSource = new DataSource(dataSourceConfig());