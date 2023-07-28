import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  numBlocks: number = 168;
  blocks: string[] = Array(this.numBlocks).fill('');
}
