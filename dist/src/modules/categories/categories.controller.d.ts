import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        id: number;
        name: string;
        icon: string;
    }>;
    findAll(params: {
        skip: number;
        take: number;
        cursor: any;
        where: any;
        orderBy: any;
    }): Promise<{
        id: number;
        name: string;
        icon: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        icon: string;
    }>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<{
        id: number;
        name: string;
        icon: string;
    }>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        icon: string;
    }>;
}
