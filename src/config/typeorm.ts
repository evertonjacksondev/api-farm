import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from 'dotenv';
import { AgricultureSchema } from "../agriculture/entities/agriculture.entity";
import { FarmSchema } from "../farm/entities/farm.entity";
import { ProducerSchema } from "../producer/entities/producer.entity";
import { DataSource, DataSourceOptions } from "typeorm";

dotenvConfig({ path: '.env' });
const config = {
    type: 'postgres',
    host: `${process.env.DB_HOST}`,
    port: `${process.env.DB_PORT}`,
    username: `${process.env.DB_USERNAME}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_DATABASE_NAME}`,
    entities: [ProducerSchema, AgricultureSchema, FarmSchema],
    migrations: ["dist/migrations/*{.ts,.js}"],
    autoLoadEntities: true,
    synchronize: true,
    
}

export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);
