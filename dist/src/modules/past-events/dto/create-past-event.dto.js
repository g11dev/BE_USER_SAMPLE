"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePastEventDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreatePastEventDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String, maxLength: 50 }, date: { required: true, type: () => Date }, description: { required: false, type: () => String, maxLength: 200 }, locationId: { required: true, type: () => Number } };
    }
}
exports.CreatePastEventDto = CreatePastEventDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Event Title can't be empty" }),
    (0, class_validator_1.MaxLength)(50),
    (0, swagger_1.ApiProperty)({ description: 'Event Title', required: true }),
    __metadata("design:type", String)
], CreatePastEventDto.prototype, "title", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Event Date can't be empty" }),
    (0, swagger_1.ApiProperty)({
        description: 'Event Date',
    }),
    __metadata("design:type", Date)
], CreatePastEventDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(200),
    (0, swagger_1.ApiProperty)({ description: 'Event Description' }),
    __metadata("design:type", String)
], CreatePastEventDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Event Location Id can't be empty" }),
    (0, swagger_1.ApiProperty)({ description: 'Event Location Id', required: true }),
    __metadata("design:type", Number)
], CreatePastEventDto.prototype, "locationId", void 0);
//# sourceMappingURL=create-past-event.dto.js.map