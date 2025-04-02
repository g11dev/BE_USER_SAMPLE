import {
  Injectable,
  Logger,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AppConfig } from 'src/config/config';
import { PassportUserDto } from 'src/modules/passportUsers/dto/passportUser.dto';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { UsersService } from 'src/modules/users/users.service';
import { promisify } from 'util';

@Injectable()
export class SessionAuthenticationService {
  private readonly logger = new Logger(SessionAuthenticationService.name);

  constructor(private readonly userService: UsersService) {}

  private readonly createUserDto: CreateUserDto = new CreateUserDto();

  async login(@Req() req: Request, @Res() res: Response): Promise<void> {
    this.logger.debug('Processing login request');
  }

  async callbackLogin(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    if (!req.oidc?.user?.email) {
      throw new UnauthorizedException('Invalid OIDC user data');
    }

    this.createUserDto.email = req.oidc.user.email;
    this.createUserDto.username = req.oidc.user.preferred_username;

    try {
      const user = await this.userService.findOne({
        email: this.createUserDto.email,
      });

      if (!user) {
        this.logger.log('Creating new user', {
          email: this.createUserDto.email,
        });
        await this.userService.create(this.createUserDto);
      }

      await promisify(req.logIn).call(req, req.oidc.user);
      return res.redirect(`${AppConfig.FRONTEND_BASE_URL}/tabs/tab2`);
    } catch (error) {
      this.logger.error('Login callback failed', { error });
      throw error;
    }
  }

  async logout(@Req() req: Request, @Res() res: Response): Promise<void> {
    this.logger.debug('Processing logout request');
  }

  async callbackLogout(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    try {
      return res.oidc.logout({
        returnTo: `${AppConfig.FRONTEND_BASE_URL}/login`,
      });
    } catch (error) {
      this.logger.error('Logout failed', {
        error: error.message,
        stack: error.stack,
      });
      throw new UnauthorizedException('Logout failed');
    }
  }

  getLoggedUser(@Req() req: Request): PassportUserDto {
    if (!req.user) {
      throw new UnauthorizedException('User not authenticated');
    }
    return req.user as PassportUserDto;
  }
}
