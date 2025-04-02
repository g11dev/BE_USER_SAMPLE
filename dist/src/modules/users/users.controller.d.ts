import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        role: import(".prisma/client").$Enums.Role;
        username: string;
        createdAt: Date;
        email: string;
    }>;
    findAll(params: {
        skip: number;
        take: number;
        cursor: any;
        where: any;
        orderBy: any;
    }): Promise<{
        id: number;
        role: import(".prisma/client").$Enums.Role;
        username: string;
        createdAt: Date;
        email: string;
    }[]>;
    findOne(email: string): Promise<{
        id: number;
        role: import(".prisma/client").$Enums.Role;
        username: string;
        createdAt: Date;
        email: string;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        role: import(".prisma/client").$Enums.Role;
        username: string;
        createdAt: Date;
        email: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        role: import(".prisma/client").$Enums.Role;
        username: string;
        createdAt: Date;
        email: string;
    }>;
}
