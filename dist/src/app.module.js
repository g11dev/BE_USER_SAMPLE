"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const session_authentication_service_1 = require("./iam/authentication/session-authentication//session-authentication.service");
const iam_module_1 = require("./iam/iam.module");
const categories_module_1 = require("./modules/categories/categories.module");
const future_events_module_1 = require("./modules/future-events/future-events.module");
const locations_module_1 = require("./modules/locations/locations.module");
const past_events_module_1 = require("./modules/past-events/past-events.module");
const questions_module_1 = require("./modules/questions/questions.module");
const users_module_1 = require("./modules/users/users.module");
const users_service_1 = require("./modules/users/users.service");
const prisma_module_1 = require("./prisma/prisma.module");
const prisma_service_1 = require("./prisma/prisma.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            prisma_module_1.PrismaModule,
            users_module_1.UsersModule,
            future_events_module_1.FutureEventsModule,
            past_events_module_1.PastEventsModule,
            questions_module_1.QuestionsModule,
            categories_module_1.CategoriesModule,
            locations_module_1.LocationsModule,
            iam_module_1.IamModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            prisma_service_1.PrismaService,
            common_1.Logger,
            session_authentication_service_1.SessionAuthenticationService,
            users_service_1.UsersService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map