"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IamModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const connect_redis_1 = require("connect-redis");
const session = require("express-session");
const passport = require("passport");
const redis_config_1 = require("../config/redis.config");
const categories_controller_1 = require("../modules/categories/categories.controller");
const categories_module_1 = require("../modules/categories/categories.module");
const categories_service_1 = require("../modules/categories/categories.service");
const future_events_controller_1 = require("../modules/future-events/future-events.controller");
const future_events_module_1 = require("../modules/future-events/future-events.module");
const future_events_service_1 = require("../modules/future-events/future-events.service");
const users_service_1 = require("../modules/users/users.service");
const prisma_service_1 = require("../prisma/prisma.service");
const user_serializer_1 = require("./authentication/serializers/user-serializer");
const session_authentication_controller_1 = require("./authentication/session-authentication/session-authentication.controller");
const session_authentication_module_1 = require("./authentication/session-authentication/session-authentication.module");
const session_authentication_service_1 = require("./authentication/session-authentication/session-authentication.service");
const keycloak_strategy_1 = require("./strategies/keycloak.strategy");
let IamModule = class IamModule {
    configure(consumer) {
        consumer
            .apply(session({
            store: new connect_redis_1.default({ client: redis_config_1.redisClient }),
            secret: process.env.SESSION_SECRET || 'fallback-secret',
            resave: false,
            saveUninitialized: false,
            cookie: {
                path: process.env.SESSION_COOKIE_PATH || '/',
                httpOnly: process.env.SESSION_COOKIE_HTTP_ONLY === 'true',
                secure: process.env.SESSION_COOKIE_SECURE === 'true',
                maxAge: Number(process.env.SESSION_COOKIE_MAX_AGE) || 86400000,
                sameSite: process.env.SESSION_COOKIE_SAME_SITE || 'none',
            },
        }), passport.initialize(), passport.session())
            .forRoutes('*');
    }
};
exports.IamModule = IamModule;
exports.IamModule = IamModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ session: true }),
            categories_module_1.CategoriesModule,
            future_events_module_1.FutureEventsModule,
            session_authentication_module_1.SessionAuthenticationModule,
        ],
        controllers: [
            session_authentication_controller_1.SessionAuthenticationController,
            categories_controller_1.CategoriesController,
            future_events_controller_1.FutureEventsController,
        ],
        providers: [
            user_serializer_1.UserSerializer,
            session_authentication_service_1.SessionAuthenticationService,
            keycloak_strategy_1.KeycloakStrategy,
            categories_service_1.CategoriesService,
            future_events_service_1.FutureEventsService,
            prisma_service_1.PrismaService,
            users_service_1.UsersService,
        ],
        exports: [IamModule],
    })
], IamModule);
//# sourceMappingURL=iam.module.js.map