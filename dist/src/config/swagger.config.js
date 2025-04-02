"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.swaggerConfig = new swagger_1.DocumentBuilder()
    .setTitle('k3p')
    .setDescription('The k3p API description')
    .setVersion('0.1')
    .build();
//# sourceMappingURL=swagger.config.js.map