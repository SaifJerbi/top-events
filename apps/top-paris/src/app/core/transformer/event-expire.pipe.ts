import { Pipe, PipeTransform } from '@angular/core';
const FIVE_MINUTES = 300000;
@Pipe({
  standalone: true,
  name: 'eventExpire',
})
export class EventExpirePipe implements PipeTransform {
  transform(value: string) {
    return new Date(value).getTime() - FIVE_MINUTES;
  }
}
