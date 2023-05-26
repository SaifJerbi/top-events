import { Injectable, Logger } from '@nestjs/common';
import { DataCollectorService } from '../data-collector.service';
import { Cron, CronExpression, Timeout } from '@nestjs/schedule';

@Injectable()
export class DataCollectorCron {
  constructor(private readonly dataCollectorService: DataCollectorService) {}

  /**
   * A task that will call the dataCollector.collect() every 5 minutes to refresh the database with new events
   */
  @Cron(CronExpression.EVERY_5_MINUTES)
  async collectData() {
    Logger.log('Run data collection every 5 minutes schedule');
    await this.dataCollectorService.collect().toPromise()
  }

  /**
   * A task that will call the dataCollector.collect() at startup to inialize the database
   */
  @Timeout(10000)
  async collectInitialData(){
    Logger.log('Run initial data collection schedule');
    await this.dataCollectorService.collect().toPromise();
  }
}
