import { ApiProperty } from '@nestjs/swagger';
import { FutureEvent } from '@prisma/client';

export class FutureEventEntity implements FutureEvent {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  title: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  published: boolean;

  @ApiProperty()
  locationId: number;
}
