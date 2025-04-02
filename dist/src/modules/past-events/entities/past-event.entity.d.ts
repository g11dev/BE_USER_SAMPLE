import { PastEvent } from '@prisma/client';
export declare class PastEventEntity implements PastEvent {
    id: number;
    title: string;
    date: Date;
    description: string | null;
    locationId: number;
}
