import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class KeycloakGuardLogout extends AuthGuard('openidconnect') {
  // da controllare per sicurezza
  constructor() {
    super();
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const response = context.switchToHttp().getResponse();

    return response.oidc.logout({ returnTo: '/auth/callbacklogout' });
  }
}
