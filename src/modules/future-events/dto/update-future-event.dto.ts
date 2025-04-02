import { PartialType } from '@nestjs/swagger';
import { CreateFutureEventDto } from './create-future-event.dto';

export class UpdateFutureEventDto extends PartialType(CreateFutureEventDto) {}
