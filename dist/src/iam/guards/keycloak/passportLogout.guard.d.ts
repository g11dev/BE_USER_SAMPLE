import { ExecutionContext } from '@nestjs/common';
declare const PassportLogoutGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class PassportLogoutGuard extends PassportLogoutGuard_base {
    constructor();
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
