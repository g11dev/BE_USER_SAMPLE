import { Provider } from '@nestjs/common';
import { redisClient } from '../config/redis.config';

export const RedisProvider: Provider = {
  provide: 'REDIS_CLIENT',
  useValue: redisClient,
};
