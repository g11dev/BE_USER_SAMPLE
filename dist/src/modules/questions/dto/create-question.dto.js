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
exports.CreateQuestionDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateQuestionDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { question: { required: true, type: () => String }, answers: { required: true, type: () => [String] }, rightAnswer: { required: true, type: () => String }, categoryId: { required: true, type: () => Number } };
    }
}
exports.CreateQuestionDto = CreateQuestionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Question can't be empty" }),
    (0, swagger_1.ApiProperty)({ description: 'Question Text', required: true }),
    __metadata("design:type", String)
], CreateQuestionDto.prototype, "question", void 0);
__decorate([
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsNotEmpty)({ message: "Answers can't be empty" }),
    (0, swagger_1.ApiProperty)({ description: 'Answers Text', required: true }),
    __metadata("design:type", Array)
], CreateQuestionDto.prototype, "answers", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "The right answer can't be empty" }),
    (0, swagger_1.ApiProperty)({ description: 'Right Answer Text', required: true }),
    __metadata("design:type", String)
], CreateQuestionDto.prototype, "rightAnswer", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Category ID can't be empty" }),
    (0, swagger_1.ApiProperty)({ description: 'Category ID Number', required: true }),
    __metadata("design:type", Number)
], CreateQuestionDto.prototype, "categoryId", void 0);
//# sourceMappingURL=create-question.dto.js.map