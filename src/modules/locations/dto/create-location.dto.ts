import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  @IsNotEmpty({ message: "Location Name can't be empty" })
  @MaxLength(50)
  @ApiProperty({ description: 'Location Name', required: true })
  name: string;

  @IsString()
  @IsNotEmpty({ message: "Location Address can't be empty" })
  @MaxLength(50)
  @ApiProperty({ description: 'Location Address', required: true })
  address: string;

  @IsString()
  @IsNotEmpty({ message: "Location Image can't be empty" })
  @ApiProperty({ description: 'Location Image', required: true })
  image: string;
}
