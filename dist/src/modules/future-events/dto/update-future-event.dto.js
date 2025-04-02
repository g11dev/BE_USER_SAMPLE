"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFutureEventDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_future_event_dto_1 = require("./create-future-event.dto");
class UpdateFutureEventDto extends (0, swagger_1.PartialType)(create_future_event_dto_1.CreateFutureEventDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateFutureEventDto = UpdateFutureEventDto;
//# sourceMappingURL=update-future-event.dto.js.map