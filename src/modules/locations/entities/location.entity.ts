import { ApiProperty } from '@nestjs/swagger';
import { Location } from '@prisma/client';

export class LocationEntity implements Location {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  image: string;
}
