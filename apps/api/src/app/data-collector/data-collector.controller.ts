import { Controller, Get, Post } from '@nestjs/common';
import { DataCollectorService } from './data-collector.service';

@Controller({
  path: '/top',
})
export class DataCollectorController {
  constructor(private readonly dataCollectorService: DataCollectorService) {}

  @Post()
  collect() {
    return this.dataCollectorService.collect();
  }

  @Get()
  loadTopEvents(){
    return this.dataCollectorService.loadTopEvents();
  }
}
