"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const dashboard_module_1 = require("./dashboard/dashboard.module");
const producer_module_1 = require("./producer/producer.module");
const farm_module_1 = require("./farm/farm.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const agriculture_module_1 = require("./agriculture/agriculture.module");
const config_1 = require("@nestjs/config");
const agriculture_entity_1 = require("./agriculture/entities/agriculture.entity");
const producer_entity_1 = require("./producer/entities/producer.entity");
const farm_entity_1 = require("./farm/entities/farm.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE_NAME,
                entities: [agriculture_entity_1.AgricultureSchema, producer_entity_1.ProducerSchema, farm_entity_1.FarmSchema],
                synchronize: false,
            }),
            dashboard_module_1.DashboardModule,
            agriculture_module_1.AgriculturaModule,
            producer_module_1.ProducerModule,
            farm_module_1.FarmModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map