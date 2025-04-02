declare const KeycloakStrategy_base: new (...args: any[]) => import("passport-openidconnect");
export declare class KeycloakStrategy extends KeycloakStrategy_base {
    constructor();
    validate(payload: any): Promise<{
        userId: any;
        email: any;
    }>;
}
export {};
