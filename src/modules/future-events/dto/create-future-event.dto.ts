import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsDate,
  IsNumber,
} from 'class-validator';

export class CreateFutureEventDto {
  @IsString()
  @IsNotEmpty({ message: "Event Title can't be empty" })
  @MaxLength(50)
  @ApiProperty({ description: 'Event Title', required: true })
  title: string;

  @Type(() => Date)
  @IsDate()
  @IsNotEmpty({ message: "Event Date can't be empty" })
  @ApiProperty({ description: 'Event Date', required: true })
  date: Date;

  @IsString()
  @ApiProperty({ description: 'Event Image', required: true })
  image: string;

  @IsNumber()
  @IsNotEmpty({ message: "Event Location Id can't be empty" })
  @ApiProperty({ description: 'Event Location Id', required: true })
  locationId: number;
}
