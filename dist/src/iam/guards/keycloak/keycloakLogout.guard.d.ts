import { ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
declare const KeycloakGuardLogout_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class KeycloakGuardLogout extends KeycloakGuardLogout_base {
    constructor();
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
export {};
