import { Question } from '@prisma/client';
export declare class QuestionEntity implements Question {
    id: number;
    question: string;
    answers: string[];
    rightAnswer: string;
    categoryId: number;
}
