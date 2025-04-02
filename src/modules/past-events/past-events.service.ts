import { Injectable } from '@nestjs/common';
import { PastEvent, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePastEventDto } from './dto/create-past-event.dto';
import { UpdatePastEventDto } from './dto/update-past-event.dto';

@Injectable()
export class PastEventsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPastEventDto: CreatePastEventDto) {
    return await this.prisma.pastEvent.create({ data: createPastEventDto });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PastEventWhereUniqueInput;
    where?: Prisma.PastEventWhereInput;
    orderBy?: Prisma.PastEventOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.pastEvent.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(
    pastEventWhereUniqueInput: Prisma.PastEventWhereUniqueInput,
  ): Promise<PastEvent> {
    const pastEvent = await this.prisma.pastEvent.findUniqueOrThrow({
      where: pastEventWhereUniqueInput,
    });

    return pastEvent;
  }

  async update(id: number, updatePastEventDto: UpdatePastEventDto) {
    return await this.prisma.pastEvent.update({
      where: { id },
      data: updatePastEventDto,
    });
  }

  async remove(pastEventWhereUniqueInput: Prisma.PastEventWhereUniqueInput) {
    return await this.prisma.pastEvent.delete({
      where: pastEventWhereUniqueInput,
    });
  }
}
