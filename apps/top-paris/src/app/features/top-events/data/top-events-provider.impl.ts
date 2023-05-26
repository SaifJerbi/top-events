import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopEvent } from '@fdj/models';

@Injectable()
export class TopEventsProvider {
  constructor(private readonly httpClient: HttpClient) {}

  getEvents(): Observable<TopEvent[]> {
    return this.httpClient.get<TopEvent[]>('/api/top');
  }
}
