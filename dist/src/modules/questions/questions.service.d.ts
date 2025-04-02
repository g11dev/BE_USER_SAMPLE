import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
export declare class QuestionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createQuestionDto: CreateQuestionDto): Promise<{
        id: number;
        question: string;
        answers: string[];
        rightAnswer: string;
        categoryId: number;
    }>;
    findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.QuestionWhereUniqueInput;
        where?: Prisma.QuestionWhereInput;
        orderBy?: Prisma.QuestionOrderByWithRelationInput;
    }): Promise<{
        id: number;
        question: string;
        answers: string[];
        rightAnswer: string;
        categoryId: number;
    }[]>;
    findOne(questionWhereUniqueInput: Prisma.QuestionWhereUniqueInput): Promise<{
        id: number;
        question: string;
        answers: string[];
        rightAnswer: string;
        categoryId: number;
    }>;
    update(id: number, updateQuestionDto: UpdateQuestionDto): Promise<{
        id: number;
        question: string;
        answers: string[];
        rightAnswer: string;
        categoryId: number;
    }>;
    remove(questionWhereUniqueInput: Prisma.QuestionWhereUniqueInput): Promise<{
        id: number;
        question: string;
        answers: string[];
        rightAnswer: string;
        categoryId: number;
    }>;
}
