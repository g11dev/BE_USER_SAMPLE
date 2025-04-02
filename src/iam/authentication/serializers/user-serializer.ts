import { Logger } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { PassportUserDto } from 'src/modules/passportUsers/dto/passportUser.dto';

export class UserSerializer extends PassportSerializer {
  private readonly logger = new Logger(UserSerializer.name);

  serializeUser(
    user: PassportUserDto, //TODO implement ValidationPipe?
    done: (err: Error, user: PassportUserDto) => void,
  ) {
    this.logger.debug('Serializing user', { user: user });
    const sessionData = user;
    this.logger.debug('User serialized successfully', { userId: user.sid });
    done(null, sessionData);
  }

  async deserializeUser(
    payload: PassportUserDto,
    // Opzionale: recupera informazioni aggiuntive da Keycloak o dal database
    // const userDetails = await this.keycloakService.getUserDetails(payload.id);
    // const enrichedUser = { ...payload, ...userDetails };
    // Per ora restituisco solo il payload come stai facendo
    done: (err: Error | null, user: PassportUserDto | null) => void,
  ) {
    try {
      this.logger.debug('Deserializing user', { userId: payload.sid });
      done(null, payload);
    } catch (error) {
      this.logger.error('Error deserializing user', {
        userId: payload?.sid,
        error: error.message,
      });
      done(error, null);
    }
  }
}
