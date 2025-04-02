import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @MaxLength(20)
  @IsNotEmpty({ message: "Category Name can't be empty" })
  @ApiProperty({ description: 'Category Name', required: true })
  name: string;

  @IsString()
  @IsNotEmpty({ message: "Category Icon can't be empty" })
  @ApiProperty({ description: 'Category Icon', required: true })
  icon: string;
}
