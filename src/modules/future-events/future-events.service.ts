import { Injectable } from '@nestjs/common';
import { FutureEvent, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFutureEventDto } from './dto/create-future-event.dto';
import { UpdateFutureEventDto } from './dto/update-future-event.dto';

@Injectable()
export class FutureEventsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFutureEventDto: CreateFutureEventDto) {
    return await this.prisma.futureEvent.create({ data: createFutureEventDto });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FutureEventWhereUniqueInput;
    where?: Prisma.FutureEventWhereInput;
    orderBy?: Prisma.FutureEventOrderByWithRelationInput;
  }): Promise<FutureEvent[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.futureEvent.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: { location: true },
    });
  }

  async findOne(
    futureEventWhereUniqueInput: Prisma.FutureEventWhereUniqueInput,
  ): Promise<FutureEvent> {
    const futureEvent = this.prisma.futureEvent.findUniqueOrThrow({
      where: futureEventWhereUniqueInput,
    });

    return await futureEvent;
  }

  async remove(
    futureEventWhereUniqueInput: Prisma.FutureEventWhereUniqueInput,
  ): Promise<FutureEvent | null> {
    return await this.prisma.futureEvent.delete({
      where: futureEventWhereUniqueInput,
    });
  }

  async update(id: number, updateFutureEventDto: UpdateFutureEventDto) {
    return await this.prisma.futureEvent.update({
      where: { id },
      data: updateFutureEventDto,
    });
  }
}
