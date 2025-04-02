import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsOptional,
  MinLength,
  IsNumber,
  IsDate,
} from 'class-validator';

export class CreatePastEventDto {
  @IsString()
  @IsNotEmpty({ message: "Event Title can't be empty" })
  @MaxLength(50)
  @ApiProperty({ description: 'Event Title', required: true })
  title: string;

  @Type(() => Date)
  @IsDate()
  @IsNotEmpty({ message: "Event Date can't be empty" })
  @ApiProperty({
    description: 'Event Date',
  })
  date: Date;

  @IsString()
  @IsOptional()
  @MaxLength(200)
  @ApiProperty({ description: 'Event Description' })
  description?: string;

  @IsNumber()
  @IsNotEmpty({ message: "Event Location Id can't be empty" })
  @ApiProperty({ description: 'Event Location Id', required: true })
  locationId: number;
}
