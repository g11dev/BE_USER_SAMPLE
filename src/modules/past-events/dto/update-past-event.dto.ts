import { PartialType } from '@nestjs/swagger';
import { CreatePastEventDto } from './create-past-event.dto';

export class UpdatePastEventDto extends PartialType(CreatePastEventDto) {}
