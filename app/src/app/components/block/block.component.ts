import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  template: `
    <div [style.background]="color" class="holder">
      <textarea
        (click)="f()"
        [(ngModel)]="content"
        style="width:60px;height:60px;"
      ></textarea>
    </div>
  `,
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent implements OnInit {
  @Input() content: string = '';
  @Input() color: string = '';
  @Input() hour: number = 0;

  constructor() {}

  ngOnInit(): void {}

  f() {
    alert(this.hour);
  }
}
