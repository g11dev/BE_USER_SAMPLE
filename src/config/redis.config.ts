import { createClient, RedisClientOptions } from 'redis';

export const redisConfig: RedisClientOptions = {
  url: process.env.REDIS_BASE_URL,
};

export const redisClient = createClient(redisConfig);
