import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TopEvent } from '@fdj/models';
import { EventComponent, BetComponent } from './widgets';
import { TopEventsProvider } from './data/top-events-provider.impl';

@Component({
  standalone: true,
  selector: 'fdj-top-events',
  templateUrl: './top-events.component.html',
  imports: [CommonModule, HttpClientModule, EventComponent, BetComponent],
  providers: [TopEventsProvider],
})
export class TopEventsComponent implements OnInit {
  topEvents$!: Observable<TopEvent[]>;
  constructor(private readonly topEventProvider: TopEventsProvider) {}

  ngOnInit(): void {
    this.topEvents$ = this.topEventProvider.getEvents();
  }
}
