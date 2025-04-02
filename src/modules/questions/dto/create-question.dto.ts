import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty({ message: "Question can't be empty" })
  @ApiProperty({ description: 'Question Text', required: true })
  question: string;

  @IsString({ each: true })
  @IsNotEmpty({ message: "Answers can't be empty" })
  @ApiProperty({ description: 'Answers Text', required: true })
  answers: string[];

  @IsString()
  @IsNotEmpty({ message: "The right answer can't be empty" })
  @ApiProperty({ description: 'Right Answer Text', required: true })
  rightAnswer: string;

  @IsNumber()
  @IsNotEmpty({ message: "Category ID can't be empty" })
  @ApiProperty({ description: 'Category ID Number', required: true })
  categoryId: number;
}
