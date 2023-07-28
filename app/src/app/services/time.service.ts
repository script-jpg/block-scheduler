import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  weeklyHour$!: Observable<string>;

  lastSecond!: number;
  ngOnInit() {
    this.lastSecond = new Date().getSeconds();
    this.weeklyHour$ = interval(1000).pipe(
      // every 1000ms (1 second)

      map(() => this.getCurrentWeeklyHour()),
    );
  }

  getCurrentWeeklyHour(): string {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay(); // returns 0-6 (0 for Sunday, 6 for Saturday)
    const hourOfDay = currentDate.getHours(); // returns 0-23
    const minuteOfHour = currentDate.getMinutes(); // returns 0-59
    const secondOfMinute = currentDate.getSeconds(); // returns 0-59

    // Convert day of week to start from Monday (1) to Sunday (7)
    const adjustedDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    if (this.lastSecond !== secondOfMinute) {
      this.lastSecond = secondOfMinute;
      console.log('update');
    }

    const weeklyHour =
      (adjustedDayOfWeek - 1) * 24 +
      hourOfDay +
      ':' +
      minuteOfHour +
      ':' +
      secondOfMinute;

    return weeklyHour;
  }
}
