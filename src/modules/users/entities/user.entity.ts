import { ApiProperty } from '@nestjs/swagger';
import { Role, User } from '@prisma/client';

export class UserEntity implements User {
  //TODO: CHATGPT dice che non è perforza necessaria l'entity

  @ApiProperty()
  id: number;

  @ApiProperty()
  role: Role;

  @ApiProperty()
  username: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  email: string;

  // @ApiProperty()
  // password: string;
}
