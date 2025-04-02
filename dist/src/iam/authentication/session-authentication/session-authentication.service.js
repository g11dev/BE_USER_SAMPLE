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
exports.SessionAuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../../../config/config");
const create_user_dto_1 = require("../../../modules/users/dto/create-user.dto");
const users_service_1 = require("../../../modules/users/users.service");
const util_1 = require("util");
let SessionAuthenticationService = class SessionAuthenticationService {
    constructor(userService) {
        this.userService = userService;
        this.createUserDto = new create_user_dto_1.CreateUserDto();
    }
    async login(req, res) {
        console.log('appena dentro login');
    }
    async callbackLogin(req, res) {
        this.createUserDto.email = req.oidc.user.email;
        this.createUserDto.username = req.oidc.user.preferred_username;
        const user = await this.userService.findOne(this.createUserDto);
        if (!user) {
            this.createUserDto.email = req.oidc.user.email;
            this.createUserDto.username = req.oidc.user.preferred_username;
            console.log('createUserDto', this.createUserDto);
            await this.userService.create(this.createUserDto);
        }
        await (0, util_1.promisify)(req.logIn).call(req, req.oidc.user);
        console.log(req.session);
        return res.redirect(`${config_1.AppConfig.FRONTEND_BASE_URL}/tabs/tab2`);
    }
    async logout(req, res) {
        console.log('appena dentro logout');
    }
    async callbackLogout(req, res) {
        try {
            return res.oidc.logout({
                returnTo: `${config_1.AppConfig.FRONTEND_BASE_URL}/tabs/tab2`,
            });
        }
        catch (error) {
            console.error('Errore durante il logout:', error);
            return res.status(500).send('Errore durante il logout');
        }
    }
    getLoggedUser1(req, res) {
        const user = req.user;
        console.log('sono auth/user REQ.user: \n', user);
        return res.json(req.user);
    }
    getLoggedUser(req) {
        const user = req.user;
        return user;
    }
};
exports.SessionAuthenticationService = SessionAuthenticationService;
__decorate([
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SessionAuthenticationService.prototype, "login", null);
__decorate([
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SessionAuthenticationService.prototype, "callbackLogin", null);
__decorate([
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SessionAuthenticationService.prototype, "logout", null);
__decorate([
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SessionAuthenticationService.prototype, "callbackLogout", null);
__decorate([
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SessionAuthenticationService.prototype, "getLoggedUser1", null);
__decorate([
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SessionAuthenticationService.prototype, "getLoggedUser", null);
exports.SessionAuthenticationService = SessionAuthenticationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], SessionAuthenticationService);
//# sourceMappingURL=session-authentication.service.js.map