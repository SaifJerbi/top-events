import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Observable, from, map, switchMap, tap } from 'rxjs';
import { Connection } from 'mongoose';

@Injectable()
export class DataCollectorService {
  API_PATH = 'https://www.pointdevente.parionssport.fdj.fr/v1/top-events';

  constructor(
    private readonly httpService: HttpService,
    @InjectConnection() private connection: Connection
  ) {}

  /**
   * Collect top events from https://www.pointdevente.parionssport.fdj.fr/v1/top-events and insert them in the database
   * @returns the count of collected events
   */
  collect(): Observable<number> {
    Logger.log('Collecting top events from parionssport.fdj.fr')
    return this.httpService.get(this.API_PATH).pipe(
      map((res) => res.data),
      switchMap((data)=> {
        return from(this.connection.collection('TopEvents').deleteMany()).pipe(map(()=>data))
      }),
      switchMap((data) => {
        return from(this.connection.collection('TopEvents').insertMany(data));
      }),
      switchMap(()=>{
        return from(this.connection.collection('TopEvents').countDocuments())
      }),
      tap(count=>{
        Logger.log(`Updating database with the new ${count} entries`)
      })
    );
  }

  /**
   * load the list of top events stored in the data base
   * @returns TopEvents array
   */
  loadTopEvents():Observable<any>{
    return from(this.connection.collection('TopEvents').find().toArray())
  }

}
