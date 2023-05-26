import { Component } from '@angular/core';
import { TopEventsComponent } from './features/top-events';

@Component({
  standalone: true,
  imports: [TopEventsComponent],
  selector: 'fdj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Top des paris';
}
