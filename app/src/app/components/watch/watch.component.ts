import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
})
export class WatchComponent {
  @Input() time!: Observable<number>;
}
