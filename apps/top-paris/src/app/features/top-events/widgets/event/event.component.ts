import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TopEvent } from '@fdj/models';

import { CountryFlagPipe, EventExpirePipe, SportIconPipe } from '../../../../core';
import { BetComponent } from '../bet/bet.component';

@Component({
  standalone: true,
  imports: [CommonModule, EventExpirePipe, SportIconPipe, CountryFlagPipe, BetComponent],
  selector: 'fdj-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  @Input() topEvent!: TopEvent;
}
