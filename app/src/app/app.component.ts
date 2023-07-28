import { Component } from '@angular/core';
import { TimeService } from './services/time.service';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  numBlocks: number = 168;
  blocks: string[] = Array(this.numBlocks).fill('');

  constructor(public timeService: TimeService) {}

  currentHour: Observable<number> | null = null;

  ngOnInit() {
    this.timeService.weeklyHour$ = timer(0, 1000).pipe(
      map(() => this.timeService.getCurrentWeeklyHour()),
    );

    this.currentHour = this.timeService.weeklyHour$.pipe(
      map((timeString) => parseInt(timeString.split(':')[0], 10)),
    );
  }
}
