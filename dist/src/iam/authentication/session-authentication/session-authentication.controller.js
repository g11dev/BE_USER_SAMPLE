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
exports.SessionAuthenticationController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const passportLogout_guard_1 = require("../../guards/keycloak/passportLogout.guard");
const keycloak_guard_1 = require("../../guards/keycloak/keycloak.guard");
const session_authentication_service_1 = require("./session-authentication.service");
let SessionAuthenticationController = class SessionAuthenticationController {
    constructor(sessionAuthService) {
        this.sessionAuthService = sessionAuthService;
    }
    async login(req, res) {
        this.sessionAuthService.login(req, res);
    }
    async callbackLogin(req, res) {
        this.sessionAuthService.callbackLogin(req, res);
    }
    async logout(req, res) {
        this.sessionAuthService.logout(req, res);
    }
    async callbackLogout(req, res) {
        this.sessionAuthService.callbackLogout(req, res);
    }
    getUser(req) {
        return this.sessionAuthService.getLoggedUser(req);
    }
};
exports.SessionAuthenticationController = SessionAuthenticationController;
__decorate([
    (0, common_1.UseGuards)(keycloak_guard_1.KeycloakGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('login'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SessionAuthenticationController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('callbacklogin'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SessionAuthenticationController.prototype, "callbackLogin", null);
__decorate([
    (0, common_1.UseGuards)(passportLogout_guard_1.PassportLogoutGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Get)('logout'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SessionAuthenticationController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('callbacklogout'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SessionAuthenticationController.prototype, "callbackLogout", null);
__decorate([
    (0, common_1.Get)('user'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SessionAuthenticationController.prototype, "getUser", null);
exports.SessionAuthenticationController = SessionAuthenticationController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [session_authentication_service_1.SessionAuthenticationService])
], SessionAuthenticationController);
//# sourceMappingURL=session-authentication.controller.js.map