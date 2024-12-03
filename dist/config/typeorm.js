"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
const agriculture_entity_1 = require("../agriculture/entities/agriculture.entity");
const farm_entity_1 = require("../farm/entities/farm.entity");
const producer_entity_1 = require("../producer/entities/producer.entity");
const typeorm_1 = require("typeorm");
(0, dotenv_1.config)({ path: '.env' });
const config = {
    type: 'postgres',
    host: `${process.env.DB_HOST}`,
    port: `${process.env.DB_PORT}`,
    username: `${process.env.DB_USERNAME}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_DATABASE_NAME}`,
    entities: [producer_entity_1.ProducerSchema, agriculture_entity_1.AgricultureSchema, farm_entity_1.FarmSchema],
    migrations: ["dist/migrations/*{.ts,.js}"],
    autoLoadEntities: true,
    synchronize: true,
};
exports.default = (0, config_1.registerAs)('typeorm', () => config);
exports.connectionSource = new typeorm_1.DataSource(config);
//# sourceMappingURL=typeorm.js.map