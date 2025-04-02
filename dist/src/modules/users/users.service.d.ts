import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        role: import(".prisma/client").$Enums.Role;
        username: string;
        createdAt: Date;
        email: string;
    }>;
    findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<User[]>;
    findOne(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User>;
    catch(error: any): void;
    remove(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        role: import(".prisma/client").$Enums.Role;
        username: string;
        createdAt: Date;
        email: string;
    }>;
}
