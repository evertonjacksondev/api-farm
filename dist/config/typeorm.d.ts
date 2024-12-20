import { AgricultureSchema } from "../agriculture/entities/agriculture.entity";
import { FarmSchema } from "../farm/entities/farm.entity";
import { ProducerSchema } from "../producer/entities/producer.entity";
import { DataSource } from "typeorm";
declare const _default: (() => {
    type: string;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    entities: (typeof ProducerSchema | typeof FarmSchema | typeof AgricultureSchema)[];
    migrations: string[];
    autoLoadEntities: boolean;
    synchronize: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string;
    port: string;
    username: string;
    password: string;
    database: string;
    entities: (typeof ProducerSchema | typeof FarmSchema | typeof AgricultureSchema)[];
    migrations: string[];
    autoLoadEntities: boolean;
    synchronize: boolean;
}>;
export default _default;
export declare const connectionSource: DataSource;
