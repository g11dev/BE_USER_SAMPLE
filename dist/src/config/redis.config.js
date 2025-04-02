"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClient = exports.redisConfig = void 0;
const redis_1 = require("redis");
exports.redisConfig = {
    url: process.env.REDIS_BASE_URL,
};
exports.redisClient = (0, redis_1.createClient)(exports.redisConfig);
//# sourceMappingURL=redis.config.js.map