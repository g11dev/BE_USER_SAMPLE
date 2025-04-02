import { FutureEvent, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFutureEventDto } from './dto/create-future-event.dto';
import { UpdateFutureEventDto } from './dto/update-future-event.dto';
export declare class FutureEventsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createFutureEventDto: CreateFutureEventDto): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        image: string;
        date: Date;
        published: boolean;
        locationId: number;
    }>;
    findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.FutureEventWhereUniqueInput;
        where?: Prisma.FutureEventWhereInput;
        orderBy?: Prisma.FutureEventOrderByWithRelationInput;
    }): Promise<FutureEvent[]>;
    findOne(futureEventWhereUniqueInput: Prisma.FutureEventWhereUniqueInput): Promise<FutureEvent>;
    remove(futureEventWhereUniqueInput: Prisma.FutureEventWhereUniqueInput): Promise<FutureEvent | null>;
    update(id: number, updateFutureEventDto: UpdateFutureEventDto): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        image: string;
        date: Date;
        published: boolean;
        locationId: number;
    }>;
}
