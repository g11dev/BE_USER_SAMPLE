import { CreateFutureEventDto } from './dto/create-future-event.dto';
import { UpdateFutureEventDto } from './dto/update-future-event.dto';
import { FutureEventsService } from './future-events.service';
export declare class FutureEventsController {
    private readonly futureEventsService;
    constructor(futureEventsService: FutureEventsService);
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
        skip: number;
        take: number;
        cursor: any;
        where: any;
        orderBy: any;
    }): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        image: string;
        date: Date;
        published: boolean;
        locationId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        image: string;
        date: Date;
        published: boolean;
        locationId: number;
    }>;
    update(id: number, updateFutureEventDto: UpdateFutureEventDto): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        image: string;
        date: Date;
        published: boolean;
        locationId: number;
    }>;
    delete(id: number): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        image: string;
        date: Date;
        published: boolean;
        locationId: number;
    }>;
}
