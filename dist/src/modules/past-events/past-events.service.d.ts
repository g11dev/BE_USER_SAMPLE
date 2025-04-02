import { PastEvent, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePastEventDto } from './dto/create-past-event.dto';
import { UpdatePastEventDto } from './dto/update-past-event.dto';
export declare class PastEventsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPastEventDto: CreatePastEventDto): Promise<{
        id: number;
        description: string | null;
        title: string;
        locationId: number;
        date: Date;
    }>;
    findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.PastEventWhereUniqueInput;
        where?: Prisma.PastEventWhereInput;
        orderBy?: Prisma.PastEventOrderByWithRelationInput;
    }): Promise<{
        id: number;
        description: string | null;
        title: string;
        locationId: number;
        date: Date;
    }[]>;
    findOne(pastEventWhereUniqueInput: Prisma.PastEventWhereUniqueInput): Promise<PastEvent>;
    update(id: number, updatePastEventDto: UpdatePastEventDto): Promise<{
        id: number;
        description: string | null;
        title: string;
        locationId: number;
        date: Date;
    }>;
    remove(pastEventWhereUniqueInput: Prisma.PastEventWhereUniqueInput): Promise<{
        id: number;
        description: string | null;
        title: string;
        locationId: number;
        date: Date;
    }>;
}
