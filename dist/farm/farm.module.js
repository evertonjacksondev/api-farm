"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const farm_service_1 = require("./farm.service");
const producer_module_1 = require("../producer/producer.module");
const farm_controller_1 = require("./farm.controller");
const farm_entity_1 = require("./entities/farm.entity");
const producer_entity_1 = require("../producer/entities/producer.entity");
const agriculture_entity_1 = require("../agriculture/entities/agriculture.entity");
let FarmModule = class FarmModule {
};
exports.FarmModule = FarmModule;
exports.FarmModule = FarmModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([farm_entity_1.FarmSchema, producer_entity_1.ProducerSchema, agriculture_entity_1.AgricultureSchema]), producer_module_1.ProducerModule],
        providers: [farm_service_1.FarmService],
        controllers: [farm_controller_1.FarmController],
    })
], FarmModule);
//# sourceMappingURL=farm.module.js.map