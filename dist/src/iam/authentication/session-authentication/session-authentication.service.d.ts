import { Request, Response } from 'express';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { UsersService } from 'src/modules/users/users.service';
export declare class SessionAuthenticationService {
    private readonly userService;
    constructor(userService: UsersService);
    createUserDto: CreateUserDto;
    login(req: Request, res: Response): Promise<void>;
    callbackLogin(req: Request, res: Response): Promise<void>;
    logout(req: Request, res: Response): Promise<void>;
    callbackLogout(req: Request, res: Response): Promise<void | Response<any, Record<string, any>>>;
    getLoggedUser1(req: Request, res: Response): Response<any, Record<string, any>>;
    getLoggedUser(req: Request): Express.User;
}
