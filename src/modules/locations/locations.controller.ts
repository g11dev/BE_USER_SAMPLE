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
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LocationEntity } from './entities/location.entity';
import { LocationsService } from './locations.service';
import { Prisma } from '@prisma/client';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post()
  @ApiCreatedResponse({ type: LocationEntity })
  async create(@Body() createLocationDto: CreateLocationDto) {
    return await this.locationsService.create(createLocationDto);
  }

  @Get()
  @ApiOkResponse({ type: LocationEntity, isArray: true })
  async findAll(
    @Body()
    params: {
      skip: number;
      take: number;
      cursor?: Prisma.LocationWhereUniqueInput;
      where?: Prisma.LocationWhereInput;
      orderBy?: Prisma.LocationOrderByWithRelationInput;
    },
  ) {
    return await this.locationsService.findAll(params);
  }

  @Get(':id')
  @ApiOkResponse({ type: LocationEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.locationsService.findOne({ id });
  }

  @Patch(':id')
  @ApiOkResponse({ type: LocationEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLocationDto: UpdateLocationDto,
  ) {
    return await this.locationsService.update(id, updateLocationDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: LocationEntity })
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.locationsService.remove({ id });
  }
}
