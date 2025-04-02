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
exports.QuestionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let QuestionsService = class QuestionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createQuestionDto) {
        return await this.prisma.question.create({ data: createQuestionDto });
    }
    async findAll(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return await this.prisma.question.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async findOne(questionWhereUniqueInput) {
        const question = await this.prisma.question.findUniqueOrThrow({
            where: questionWhereUniqueInput,
        });
        return question;
    }
    async update(id, updateQuestionDto) {
        return await this.prisma.question.update({
            where: { id },
            data: updateQuestionDto,
        });
    }
    async remove(questionWhereUniqueInput) {
        return await this.prisma.question.delete({
            where: questionWhereUniqueInput,
        });
    }
};
exports.QuestionsService = QuestionsService;
exports.QuestionsService = QuestionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], QuestionsService);
//# sourceMappingURL=questions.service.js.map