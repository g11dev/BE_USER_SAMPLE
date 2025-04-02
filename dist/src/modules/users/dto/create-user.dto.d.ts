import { Role } from '@prisma/client';
export declare class CreateUserDto {
    username: string;
    role: Role;
    email: string;
}
