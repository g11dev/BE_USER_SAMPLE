import { Location, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
export declare class LocationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createLocationDto: CreateLocationDto): Promise<{
        id: number;
        name: string;
        address: string;
        image: string;
    }>;
    findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.LocationWhereUniqueInput;
        where?: Prisma.LocationWhereInput;
        orderBy?: Prisma.LocationOrderByWithRelationInput;
    }): Promise<Location[]>;
    findOne(locationWhereUniqueInput: Prisma.LocationWhereUniqueInput): Promise<Location>;
    remove(locationWhereUniqueInput: Prisma.LocationWhereUniqueInput): Promise<Location | null>;
    update(id: number, updateLocationDto: UpdateLocationDto): Promise<{
        id: number;
        name: string;
        address: string;
        image: string;
    }>;
}
