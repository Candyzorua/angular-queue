import { Component, Input } from '@angular/core';
import { Counter } from '../model/counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counters: Array<Counter>;
  public numServing: number = 0;

  constructor () {
    this.counters = [
      new Counter(1, 0),
      new Counter(2, 0),
      new Counter(3, 0),
      new Counter(4, 0)
    ]
  }

  public incrementNumServing(): number {
    return ++this.numServing;
  }

  public takeNextNumber(index: number): void {
    let newNumServing: number = this.incrementNumServing();
    this.counters[index].setNumServing(newNumServing);
    this.disableCounter(index);
  }

  public enableCounter(index: number): void {
    this.counters[index].enabled = true;
  }

  private disableCounter(index: number): void {
    this.counters[index].enabled = false;
  }
}
