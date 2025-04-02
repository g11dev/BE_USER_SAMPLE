import { ApiProperty } from '@nestjs/swagger';
import { PastEvent } from '@prisma/client';

export class PastEventEntity implements PastEvent {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  description: string | null;

  @ApiProperty()
  locationId: number;

  // @ApiProperty({ type: () => Location })
  // location: Location;

  // @ApiProperty({ type: () => [Category] })
  // categories: Category[];

  // @ApiProperty({ type: () => [User] })
  // users: User[];

  // TODO capire se gli array (relazioni) vanno rappresentati qui ( e nelle altre entità o meno )
}
