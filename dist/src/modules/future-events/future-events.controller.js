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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutureEventsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const passport_guard_1 = require("../../iam/guards/passport/passport.guard");
const create_future_event_dto_1 = require("./dto/create-future-event.dto");
const update_future_event_dto_1 = require("./dto/update-future-event.dto");
const future_event_entity_1 = require("./entities/future-event.entity");
const future_events_service_1 = require("./future-events.service");
let FutureEventsController = class FutureEventsController {
    constructor(futureEventsService) {
        this.futureEventsService = futureEventsService;
    }
    async create(createFutureEventDto) {
        return await this.futureEventsService.create(createFutureEventDto);
    }
    async findAll(params) {
        return await this.futureEventsService.findAll(params);
    }
    async findOne(id) {
        return await this.futureEventsService.findOne({ id });
    }
    async update(id, updateFutureEventDto) {
        return await this.futureEventsService.update(id, updateFutureEventDto);
    }
    async delete(id) {
        return await this.futureEventsService.remove({ id });
    }
};
exports.FutureEventsController = FutureEventsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: future_event_entity_1.FutureEventEntity }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_future_event_dto_1.CreateFutureEventDto]),
    __metadata("design:returntype", Promise)
], FutureEventsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(passport_guard_1.PassportGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ type: future_event_entity_1.FutureEventEntity, isArray: true }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FutureEventsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: future_event_entity_1.FutureEventEntity }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FutureEventsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: future_event_entity_1.FutureEventEntity }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_future_event_dto_1.UpdateFutureEventDto]),
    __metadata("design:returntype", Promise)
], FutureEventsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: future_event_entity_1.FutureEventEntity }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FutureEventsController.prototype, "delete", null);
exports.FutureEventsController = FutureEventsController = __decorate([
    (0, common_1.Controller)('future-events'),
    __metadata("design:paramtypes", [future_events_service_1.FutureEventsService])
], FutureEventsController);
//# sourceMappingURL=future-events.controller.js.map