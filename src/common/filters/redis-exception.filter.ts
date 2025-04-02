import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';

export class RedisException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RedisException';
  }
}

@Catch(RedisException)
export class RedisExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(RedisExceptionFilter.name);

  catch(exception: RedisException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest();

    this.logger.debug(`Processing Redis error for path: ${request.url}`);

    if (response.headersSent) {
      this.logger.debug('Headers already sent, skipping Redis filter');
      return;
    }

    this.logger.error(`Redis operation failed: ${exception.message}`);

    response.status(HttpStatus.SERVICE_UNAVAILABLE).json({
      statusCode: HttpStatus.SERVICE_UNAVAILABLE,
      message: 'Cache service temporarily unavailable',
      error: exception.message,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}
