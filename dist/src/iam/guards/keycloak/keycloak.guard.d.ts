import { ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
declare const KeycloakGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class KeycloakGuard extends KeycloakGuard_base {
    constructor();
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
export {};
