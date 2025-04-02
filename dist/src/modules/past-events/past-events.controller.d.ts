import { PastEventsService } from './past-events.service';
import { CreatePastEventDto } from './dto/create-past-event.dto';
import { UpdatePastEventDto } from './dto/update-past-event.dto';
export declare class PastEventsController {
    private readonly pastEventsService;
    constructor(pastEventsService: PastEventsService);
    create(createPastEventDto: CreatePastEventDto): Promise<{
        id: number;
        description: string | null;
        title: string;
        locationId: number;
        date: Date;
    }>;
    findAll(params: {
        skip: number;
        take: number;
        cursor: any;
        where: any;
        orderBy: any;
    }): Promise<{
        id: number;
        description: string | null;
        title: string;
        locationId: number;
        date: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        description: string | null;
        title: string;
        locationId: number;
        date: Date;
    }>;
    update(id: number, updatePastEventDto: UpdatePastEventDto): Promise<{
        id: number;
        description: string | null;
        title: string;
        locationId: number;
        date: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        description: string | null;
        title: string;
        locationId: number;
        date: Date;
    }>;
}
