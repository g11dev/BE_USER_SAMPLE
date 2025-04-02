import { ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

@Injectable()
export class PassportLogoutGuard extends AuthGuard('keycloak') {
  private readonly logger = new Logger(PassportLogoutGuard.name);

  constructor() {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const http = context.switchToHttp();
    const request = http.getRequest<Request>();
    const response = http.getResponse<Response>();

    try {
      // Otteniamo request e response dal context
      await new Promise<void>((resolve, reject) => {
        request.logOut({ keepSessionInfo: false }, (err) => {
          if (err) reject(err);
          resolve();
        });
      });

      // Distruggiamo la sessione
      if (request.session) {
        await new Promise<void>((resolve, reject) => {
          request.session.destroy((err) => {
            if (err) reject(err);
            resolve();
          });
        });
      }

      // Puliamo il cookie
      response.clearCookie('connect.sid', {
        path: '/',
        secure: true,
        httpOnly: true,
        sameSite: 'lax',
      });

      // Redirect
      response.redirect('https://back:3000/auth/callbacklogout');

      return true; // La guard è stata eseguita con successo
    } catch (error) {
      this.logger.error('Logout failed', {
        error: error.message,
        stack: error.stack,
      });
      response.status(500).send('Errore durante il logout');
      return false; // La guard è fallita
    }
  }
}
