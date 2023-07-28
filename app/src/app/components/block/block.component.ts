import { Component, Input, OnInit } from '@angular/core';
import { BlockService } from 'src/app/services/block.service';

@Component({
  selector: 'app-block',
  template: `
    <div
      [style.background-color]="
        highlight
          ? '#ACFADF'
          : 'rgba(232, 255, 206, 0.2)
      '
      "
      class="holder"
    >
      <textarea
        (blur)="saveContent()"
        [(ngModel)]="content"
        style="width:75px;height:75px;"
      ></textarea>
    </div>
  `,
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent implements OnInit {
  @Input() hour: number = 0;
  @Input() highlight: boolean = false;
  content: string = '';

  constructor(private blockService: BlockService) {}

  ngOnInit(): void {
    this.content = this.blockService.getBlock(this.hour);
  }

  saveContent(): void {
    this.blockService.setBlock(this.hour, this.content);
  }
}
