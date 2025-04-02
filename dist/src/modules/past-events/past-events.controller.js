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
exports.PastEventsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const past_events_service_1 = require("./past-events.service");
const create_past_event_dto_1 = require("./dto/create-past-event.dto");
const update_past_event_dto_1 = require("./dto/update-past-event.dto");
const past_event_entity_1 = require("./entities/past-event.entity");
const swagger_1 = require("@nestjs/swagger");
let PastEventsController = class PastEventsController {
    constructor(pastEventsService) {
        this.pastEventsService = pastEventsService;
    }
    async create(createPastEventDto) {
        return await this.pastEventsService.create(createPastEventDto);
    }
    async findAll(params) {
        return await this.pastEventsService.findAll(params);
    }
    async findOne(id) {
        return await this.pastEventsService.findOne({ id });
    }
    async update(id, updatePastEventDto) {
        return await this.pastEventsService.update(id, updatePastEventDto);
    }
    async remove(id) {
        return await this.pastEventsService.remove({ id });
    }
};
exports.PastEventsController = PastEventsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: past_event_entity_1.PastEventEntity }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_past_event_dto_1.CreatePastEventDto]),
    __metadata("design:returntype", Promise)
], PastEventsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ type: past_event_entity_1.PastEventEntity, isArray: true }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PastEventsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: past_event_entity_1.PastEventEntity }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PastEventsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: past_event_entity_1.PastEventEntity }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_past_event_dto_1.UpdatePastEventDto]),
    __metadata("design:returntype", Promise)
], PastEventsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: past_event_entity_1.PastEventEntity }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PastEventsController.prototype, "remove", null);
exports.PastEventsController = PastEventsController = __decorate([
    (0, common_1.Controller)('past-events'),
    __metadata("design:paramtypes", [past_events_service_1.PastEventsService])
], PastEventsController);
//# sourceMappingURL=past-events.controller.js.map