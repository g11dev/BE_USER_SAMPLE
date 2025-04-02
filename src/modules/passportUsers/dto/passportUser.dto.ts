import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class PassportUserDto {
  // @IsString()
  // @IsNotEmpty({ message: "Username can't be empty" })
  // @MaxLength(20)
  // @ApiProperty({ description: 'Lo username', required: true })
  // username: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  @ApiProperty({ description: 'sid' })
  sid: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  @ApiProperty({ description: 'jti' })
  jti: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  @ApiProperty({ description: 'sub' })
  sub: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  @ApiProperty({ description: 'typ' })
  typ: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  @ApiProperty({ description: 'acr' })
  acr: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ description: 'email_verified' })
  email_verified: boolean;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty({ description: 'name' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty({ description: 'preferred_username' })
  preferred_username: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty({ description: 'given_name' })
  given_name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty({ description: 'family_name' })
  family_name: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(20)
  @ApiProperty({ description: 'email' })
  email: string;
}
