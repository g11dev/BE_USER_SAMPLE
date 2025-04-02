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
exports.LocationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let LocationsService = class LocationsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createLocationDto) {
        return await this.prisma.location.create({
            data: createLocationDto,
        });
    }
    async findAll(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return await this.prisma.location.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async findOne(locationWhereUniqueInput) {
        const location = this.prisma.location.findUniqueOrThrow({
            where: locationWhereUniqueInput,
        });
        return await location;
    }
    async remove(locationWhereUniqueInput) {
        return await this.prisma.location.delete({
            where: locationWhereUniqueInput,
        });
    }
    async update(id, updateLocationDto) {
        return await this.prisma.location.update({
            where: { id },
            data: updateLocationDto,
        });
    }
};
exports.LocationsService = LocationsService;
exports.LocationsService = LocationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LocationsService);
//# sourceMappingURL=locations.service.js.map