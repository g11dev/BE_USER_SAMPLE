import { ExecutionContext } from '@nestjs/common';
declare const PassportGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class PassportGuard extends PassportGuard_base {
    constructor();
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
