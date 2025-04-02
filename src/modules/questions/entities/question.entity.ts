import { ApiProperty } from '@nestjs/swagger';
import { Question } from '@prisma/client';

export class QuestionEntity implements Question {
  @ApiProperty()
  id: number;

  @ApiProperty()
  question: string;

  @ApiProperty()
  answers: string[];

  @ApiProperty()
  rightAnswer: string;

  @ApiProperty()
  categoryId: number;
}
