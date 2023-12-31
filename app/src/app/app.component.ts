import { Component } from '@angular/core';
import { TimeService } from './services/time.service';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  numBlocks: number = 168;
  blocks: string[] = Array(this.numBlocks).fill('');

  constructor(
    public timeService: TimeService,
    private router: Router,
  ) {}

  currentHour!: Observable<number>;

  ngOnInit() {
    this.timeService.weeklyHour$ = timer(0, 1000).pipe(
      map(() => this.timeService.getCurrentWeeklyHour()),
    );

    this.currentHour = this.timeService.weeklyHour$.pipe(
      map((timeString) => parseInt(timeString.split(':')[0], 10)),
    );
  }

  f() {
    localStorage.clear();
    location.reload();
  }

  g() {
    alert('Minute: ' + this.timeService.getCurrentWeeklyHour().split(':')[1]);
  }
}
