"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePastEventDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_past_event_dto_1 = require("./create-past-event.dto");
class UpdatePastEventDto extends (0, swagger_1.PartialType)(create_past_event_dto_1.CreatePastEventDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdatePastEventDto = UpdatePastEventDto;
//# sourceMappingURL=update-past-event.dto.js.map