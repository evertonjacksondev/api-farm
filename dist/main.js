"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const exception_filter_1 = require("./common/filters/exception.filter");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalFilters(new exception_filter_1.ValidationExceptionFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API Documentation - Agro Verx')
        .setDescription('API criada para avaliar e demonstrar competências técnicas no desenvolvimento e gerenciamento de serviços backend.')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/v1/docs', app, document);
    await app.listen(9000);
}
bootstrap();
//# sourceMappingURL=main.js.map