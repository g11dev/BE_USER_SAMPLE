import { ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class PassportGuard extends AuthGuard('session') {
  private readonly logger = new Logger(PassportGuard.name);

  constructor() {
    super();
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    this.logger.debug(
      'hanno triggerato passport guard, è',
      request.isAuthenticated(),
    );
    return request.isAuthenticated();
  }
}
