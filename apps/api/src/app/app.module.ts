import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';

import { DataCollectorModule } from './data-collector';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${
        process.env.NODE_ENV === 'production' ? 'mongo' : 'localhost'
      }:27017/fdj`
    ),
    ScheduleModule.forRoot(),
    DataCollectorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
