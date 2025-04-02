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
exports.PastEventsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PastEventsService = class PastEventsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPastEventDto) {
        return await this.prisma.pastEvent.create({ data: createPastEventDto });
    }
    async findAll(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return await this.prisma.pastEvent.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async findOne(pastEventWhereUniqueInput) {
        const pastEvent = await this.prisma.pastEvent.findUniqueOrThrow({
            where: pastEventWhereUniqueInput,
        });
        return pastEvent;
    }
    async update(id, updatePastEventDto) {
        return await this.prisma.pastEvent.update({
            where: { id },
            data: updatePastEventDto,
        });
    }
    async remove(pastEventWhereUniqueInput) {
        return await this.prisma.pastEvent.delete({
            where: pastEventWhereUniqueInput,
        });
    }
};
exports.PastEventsService = PastEventsService;
exports.PastEventsService = PastEventsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PastEventsService);
//# sourceMappingURL=past-events.service.js.map