"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgriculturaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const farm_entity_1 = require("../farm/entities/farm.entity");
const farm_module_1 = require("../farm/farm.module");
const agriculture_entity_1 = require("./entities/agriculture.entity");
const producer_entity_1 = require("../producer/entities/producer.entity");
const agriculture_controller_1 = require("./agriculture.controller");
const agriculture_service_1 = require("./agriculture.service");
const producer_module_1 = require("../producer/producer.module");
let AgriculturaModule = class AgriculturaModule {
};
exports.AgriculturaModule = AgriculturaModule;
exports.AgriculturaModule = AgriculturaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([farm_entity_1.FarmSchema, agriculture_entity_1.AgricultureSchema, producer_entity_1.ProducerSchema]),
            farm_module_1.FarmModule,
            AgriculturaModule,
            producer_module_1.ProducerModule
        ],
        controllers: [agriculture_controller_1.AgricultureController],
        providers: [agriculture_service_1.AgricultureService, agriculture_service_1.AgricultureService],
    })
], AgriculturaModule);
//# sourceMappingURL=agriculture.module.js.map