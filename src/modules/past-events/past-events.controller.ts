import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { CreatePastEventDto } from './dto/create-past-event.dto';
import { UpdatePastEventDto } from './dto/update-past-event.dto';
import { PastEventEntity } from './entities/past-event.entity';
import { PastEventsService } from './past-events.service';

@Controller('past-events')
export class PastEventsController {
  constructor(private readonly pastEventsService: PastEventsService) {}

  @Post()
  @ApiCreatedResponse({ type: PastEventEntity })
  async create(@Body() createPastEventDto: CreatePastEventDto) {
    return await this.pastEventsService.create(createPastEventDto);
  }

  @Get()
  // @Header('Access-Control-Allow-Origin', '*')
  @ApiOkResponse({ type: PastEventEntity, isArray: true })
  async findAll(
    @Body()
    params: {
      skip: number;
      take: number;
      cursor?: Prisma.PastEventWhereUniqueInput;
      where?: Prisma.PastEventWhereInput;
      orderBy?: Prisma.PastEventOrderByWithRelationInput;
    },
  ) {
    return await this.pastEventsService.findAll(params);
  }

  @Get(':id')
  @ApiOkResponse({ type: PastEventEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.pastEventsService.findOne({ id });
  }

  @Patch(':id')
  @ApiOkResponse({ type: PastEventEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePastEventDto: UpdatePastEventDto,
  ) {
    return await this.pastEventsService.update(id, updatePastEventDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PastEventEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.pastEventsService.remove({ id });
  }
}
