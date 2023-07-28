import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Output } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
})
export class WatchComponent {
  weeklyHour$!: Observable<number>;

  ngOnInit() {
    this.weeklyHour$ = interval(1000).pipe(
      // every 1000ms (1 second)

      map(() => this.getCurrentWeeklyHour()),
    );
  }

  getCurrentWeeklyHour(): number {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay(); // returns 0-6 (0 for Sunday, 6 for Saturday)
    const hourOfDay = currentDate.getHours(); // returns 0-23
    const minuteOfHour = currentDate.getMinutes(); // returns 0-59

    // Convert day of week to start from Monday (1) to Sunday (7)
    const adjustedDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    const weeklyHour =
      (adjustedDayOfWeek - 1) * 24 + hourOfDay + minuteOfHour / 60;

    return Math.floor(weeklyHour);
  }
}
