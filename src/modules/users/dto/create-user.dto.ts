import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: "Username can't be empty" })
  @MaxLength(20)
  @ApiProperty({ description: 'Lo username', required: true })
  username: string;

  // @IsNotEmpty()
  @MaxLength(10)
  @ApiProperty({
    description: 'Il ruolo',
    default: 'USER', // 'PLAYER', //TODO rifare migrazione prism a
  })
  role: Role = Role.USER;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ description: "L'email" })
  email: string;

  // @IsString()
  // // @IsNotEmpty()
  // @MinLength(8)
  // @ApiProperty({ description: 'La password' })
  // password: string;
}
