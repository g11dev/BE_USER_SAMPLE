import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { PassportGuard } from 'src/iam/guards/passport/passport.guard';
import { CreateFutureEventDto } from './dto/create-future-event.dto';
import { UpdateFutureEventDto } from './dto/update-future-event.dto';
import { FutureEventEntity } from './entities/future-event.entity';
import { FutureEventsService } from './future-events.service';

@Controller('future-events')
export class FutureEventsController {
  constructor(private readonly futureEventsService: FutureEventsService) {}

  @Post()
  @ApiCreatedResponse({ type: FutureEventEntity })
  async create(@Body() createFutureEventDto: CreateFutureEventDto) {
    return await this.futureEventsService.create(createFutureEventDto);
  }

  @UseGuards(PassportGuard)
  @Get()
  @ApiOkResponse({ type: FutureEventEntity, isArray: true })
  async findAll(
    @Body()
    params: {
      skip: number;
      take: number;
      cursor?: Prisma.FutureEventWhereUniqueInput;
      where?: Prisma.FutureEventWhereInput;
      orderBy?: Prisma.FutureEventOrderByWithRelationInput;
    },
  ) {
    return await this.futureEventsService.findAll(params);
  }

  @Get(':id')
  @ApiOkResponse({ type: FutureEventEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.futureEventsService.findOne({ id });
  }

  @Patch(':id')
  @ApiOkResponse({ type: FutureEventEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFutureEventDto: UpdateFutureEventDto,
  ) {
    return await this.futureEventsService.update(id, updateFutureEventDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: FutureEventEntity })
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.futureEventsService.remove({ id });
  }
}
