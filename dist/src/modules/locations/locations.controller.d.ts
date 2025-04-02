import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LocationsService } from './locations.service';
export declare class LocationsController {
    private readonly locationsService;
    constructor(locationsService: LocationsService);
    create(createLocationDto: CreateLocationDto): Promise<{
        id: number;
        name: string;
        address: string;
        image: string;
    }>;
    findAll(params: {
        skip: number;
        take: number;
        cursor: any;
        where: any;
        orderBy: any;
    }): Promise<{
        id: number;
        name: string;
        address: string;
        image: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        address: string;
        image: string;
    }>;
    update(id: number, updateLocationDto: UpdateLocationDto): Promise<{
        id: number;
        name: string;
        address: string;
        image: string;
    }>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        address: string;
        image: string;
    }>;
}
