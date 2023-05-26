import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';

import { DataCollectorController } from './data-collector.controller';
import { DataCollectorService } from './data-collector.service';
import { TopEvent, TopEventSchema } from './schema/top-event.schema';
import { DataCollectorCron } from './schedular/data-collector.cron';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      {
        name: TopEvent.name,
        schema: TopEventSchema,
      },
    ]),
  ],
  controllers: [DataCollectorController],
  providers: [DataCollectorService, DataCollectorCron],
})
export class DataCollectorModule {}
