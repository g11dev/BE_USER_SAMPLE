import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Logger,
} from '@nestjs/common';
import { IsString, MinLength } from 'class-validator';
import { RedisClientType } from 'redis';
import { RedisException } from '../../common/filters/redis-exception.filter';

class TestDTO {
  @IsString()
  @MinLength(3)
  name: string;
}

@Controller('test')
export class TestController {
  private readonly logger = new Logger(TestController.name);

  constructor(
    @Inject('REDIS_CLIENT') private readonly redis: RedisClientType,
  ) {}

  @Get('http-error')
  testHttpException() {
    this.logger.debug('Testing HTTP exception endpoint');
    throw new HttpException(
      'Test HTTP Exception - Bad Request',
      HttpStatus.BAD_REQUEST,
    );
  }

  @Get('redis-error')
  async testRedisError() {
    this.logger.debug('Testing Redis error endpoint');

    // Forza un errore Redis direttamente
    throw new RedisException('Forced Redis error for testing');
  }

  @Get('redis-reconnect')
  async reconnectRedis() {
    this.logger.debug('Testing Redis reconnect endpoint');

    try {
      if (!this.redis.isOpen) {
        await this.redis.connect();
        return { message: 'Redis reconnected successfully' };
      }
      return { message: 'Redis already connected' };
    } catch (error) {
      throw new RedisException(`Failed to reconnect: ${error.message}`);
    }
  }

  @Get('global-error')
  testGlobalException() {
    this.logger.debug('Testing global exception endpoint');

    // Forza un errore generico che non viene gestito dagli altri filtri
    throw new Error('This is an unhandled error for testing global filter');
  }
}
