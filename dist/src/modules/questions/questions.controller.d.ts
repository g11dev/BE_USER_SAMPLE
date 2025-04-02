import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
export declare class QuestionsController {
    private readonly questionsService;
    constructor(questionsService: QuestionsService);
    create(createQuestionDto: CreateQuestionDto): Promise<{
        id: number;
        question: string;
        answers: string[];
        rightAnswer: string;
        categoryId: number;
    }>;
    findAll(params: {
        skip: number;
        take: number;
        cursor: any;
        where: any;
        orderBy: any;
    }): Promise<{
        id: number;
        question: string;
        answers: string[];
        rightAnswer: string;
        categoryId: number;
    }[]>;
    findOne(id: number): Promise<{
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
    remove(id: number): Promise<{
        id: number;
        question: string;
        answers: string[];
        rightAnswer: string;
        categoryId: number;
    }>;
}
