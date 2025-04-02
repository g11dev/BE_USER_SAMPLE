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
exports.PassportLogoutGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let PassportLogoutGuard = class PassportLogoutGuard extends (0, passport_1.AuthGuard)('keycloak') {
    constructor() {
        super();
    }
    async canActivate(context) {
        const http = context.switchToHttp();
        const request = http.getRequest();
        const response = http.getResponse();
        try {
            await new Promise((resolve, reject) => {
                request.logOut({ keepSessionInfo: false }, (err) => {
                    if (err)
                        reject(err);
                    resolve();
                });
            });
            if (request.session) {
                await new Promise((resolve, reject) => {
                    request.session.destroy((err) => {
                        if (err)
                            reject(err);
                        resolve();
                    });
                });
            }
            response.clearCookie('connect.sid', {
                path: '/',
                secure: true,
                httpOnly: true,
                sameSite: 'lax',
            });
            response.redirect('https://back:3000/auth/callbacklogout');
            return true;
        }
        catch (error) {
            console.error('Errore durante il logout:', error);
            response.status(500).send('Errore durante il logout');
            return false;
        }
    }
};
exports.PassportLogoutGuard = PassportLogoutGuard;
exports.PassportLogoutGuard = PassportLogoutGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PassportLogoutGuard);
//# sourceMappingURL=passportLogout.guard.js.map