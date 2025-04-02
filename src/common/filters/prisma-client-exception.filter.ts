import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Response } from 'express';
import { HttpAdapterHost } from '@nestjs/core';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(PrismaClientExceptionFilter.name);

  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (response.headersSent) {
      this.logger.debug('Headers already sent, skipping Prisma filter');
      return;
    }

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    this.logger.debug(`Handling Prisma error: ${exception.code}`);

    switch (exception.code) {
      case 'P2025':
        status = HttpStatus.NOT_FOUND;
        // Personalizza il messaggio in base al contesto
        message = exception.message.includes('User')
          ? 'User not found or invalid credentials'
          : 'Record not found';
        break;
      case 'P2002':
        status = HttpStatus.CONFLICT;
        message = 'Unique constraint violation';
        break;
      default:
        this.logger.error('Unhandled Prisma error:', exception);
        message = 'Database operation failed';
        break;
    }

    httpAdapter.reply(
      ctx.getResponse(),
      {
        statusCode: status,
        message,
        timestamp: new Date().toISOString(),
        path: ctx.getRequest().url,
      },
      status,
    );
  }
}
