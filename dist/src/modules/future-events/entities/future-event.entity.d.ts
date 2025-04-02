import { FutureEvent } from '@prisma/client';
export declare class FutureEventEntity implements FutureEvent {
    id: number;
    createdAt: Date;
    title: string;
    image: string;
    date: Date;
    published: boolean;
    locationId: number;
}
