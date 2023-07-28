import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlockService {
  private blocks: string[] = [];

  constructor() {
    const savedBlocks = localStorage.getItem('blocks');
    if (savedBlocks) {
      this.blocks = JSON.parse(savedBlocks);
    }
  }

  getBlock(hour: number): string {
    return this.blocks[hour] || '';
  }

  setBlock(hour: number, content: string): void {
    this.blocks[hour] = content;
    localStorage.setItem('blocks', JSON.stringify(this.blocks));
  }
}
