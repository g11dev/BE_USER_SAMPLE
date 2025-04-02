import { Request, Response } from 'express';
import { SessionAuthenticationService } from './session-authentication.service';
export declare class SessionAuthenticationController {
    private readonly sessionAuthService;
    constructor(sessionAuthService: SessionAuthenticationService);
    login(req: Request, res: Response): Promise<void>;
    callbackLogin(req: Request, res: Response): Promise<void>;
    logout(req: Request, res: Response): Promise<void>;
    callbackLogout(req: Request, res: Response): Promise<void>;
    getUser(req: Request): Express.User;
}
