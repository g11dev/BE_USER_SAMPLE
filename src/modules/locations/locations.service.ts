import { Injectable } from '@nestjs/common';
import { Location, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLocationDto: CreateLocationDto) {
    return await this.prisma.location.create({
      data: createLocationDto,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.LocationWhereUniqueInput;
    where?: Prisma.LocationWhereInput;
    orderBy?: Prisma.LocationOrderByWithRelationInput;
  }): Promise<Location[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.location.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(
    locationWhereUniqueInput: Prisma.LocationWhereUniqueInput,
  ): Promise<Location> {
    const location = this.prisma.location.findUniqueOrThrow({
      where: locationWhereUniqueInput,
    });

    return await location;
  }

  async remove(
    locationWhereUniqueInput: Prisma.LocationWhereUniqueInput,
  ): Promise<Location | null> {
    return await this.prisma.location.delete({
      where: locationWhereUniqueInput,
    });
  }

  async update(id: number, updateLocationDto: UpdateLocationDto) {
    return await this.prisma.location.update({
      where: { id },
      data: updateLocationDto,
    });
  }
}
