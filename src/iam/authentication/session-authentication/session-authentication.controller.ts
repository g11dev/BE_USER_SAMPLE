import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { PassportLogoutGuard } from 'src/iam/guards/keycloak/passportLogout.guard';
import { PassportUserDto } from 'src/modules/passportUsers/dto/passportUser.dto';
import { KeycloakGuard } from '../../guards/keycloak/keycloak.guard';
import { SessionAuthenticationService } from './session-authentication.service';

@Controller('auth')
@ApiTags('Authentication')
export class SessionAuthenticationController {
  constructor(
    private readonly sessionAuthService: SessionAuthenticationService,
  ) {}

  @UseGuards(KeycloakGuard)
  @HttpCode(HttpStatus.OK)
  @Get('login')
  @ApiOperation({ summary: 'Initiate login process' })
  @ApiResponse({ status: 200, description: 'Login initiated' })
  async login(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.sessionAuthService.login(req, res);
  }

  @Get('callbacklogin')
  @ApiOperation({ summary: 'Handle login callback' })
  @ApiResponse({ status: 200, description: 'Login successful' })
  async callbackLogin(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    return this.sessionAuthService.callbackLogin(req, res);
  }

  @UseGuards(PassportLogoutGuard)
  @HttpCode(HttpStatus.OK)
  @Get('logout')
  @ApiOperation({ summary: 'Initiate logout process' })
  @ApiResponse({ status: 200, description: 'Logout initiated' })
  async logout(@Req() req: Request, @Res() res: Response): Promise<void> {
    return this.sessionAuthService.logout(req, res);
  }

  @Get('callbacklogout')
  @ApiOperation({ summary: 'Handle logout callback' })
  @ApiResponse({ status: 200, description: 'Logout successful' })
  @ApiResponse({ status: 500, description: 'Logout failed' })
  async callbackLogout(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    return this.sessionAuthService.callbackLogout(req, res);
  }

  @Get('user')
  @ApiOperation({ summary: 'Get logged user info' })
  @ApiResponse({ status: 200, type: PassportUserDto })
  getUser(@Req() req: Request): PassportUserDto {
    return this.sessionAuthService.getLoggedUser(req);
  }
}
