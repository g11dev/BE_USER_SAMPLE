import { Role, User } from '@prisma/client';
export declare class UserEntity implements User {
    id: number;
    role: Role;
    username: string;
    createdAt: Date;
    email: string;
}
