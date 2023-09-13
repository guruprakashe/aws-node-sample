import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { EventsService } from './services/EventsService';

@Module({
  imports: [],
  providers: [AppService, EventsService],
})
export class AppModule {}
