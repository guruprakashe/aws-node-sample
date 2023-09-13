import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
  process(event): string {
    console.log(`Event details - ${JSON.stringify(event)}`);
    return 'Hello World!';
  }
}