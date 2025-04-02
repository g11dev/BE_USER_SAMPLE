import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(ForbiddenException)
export class KeycloakExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(KeycloakExceptionFilter.name);

  catch(exception: ForbiddenException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // Se gli headers sono già stati inviati, logga e esci
    if (response.headersSent) {
      this.logger.debug('Headers already sent, skipping Keycloak filter');
      return;
    }

    // Se l'errore proviene da Keycloak
    if (
      exception.message.includes('Keycloak') ||
      exception.message.includes('Forbidden resource')
    ) {
      response.status(403).json({
        statusCode: 403,
        message: 'Authentication failed',
        timestamp: new Date().toISOString(),
      });
      return;
    }

    // Per altri tipi di ForbiddenException, lascia che vengano gestiti da altri filtri
    throw exception;
  }
}
