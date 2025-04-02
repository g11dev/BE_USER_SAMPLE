import { Location } from '@prisma/client';
export declare class LocationEntity implements Location {
    id: number;
    name: string;
    address: string;
    image: string;
}
