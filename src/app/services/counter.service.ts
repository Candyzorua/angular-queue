import { Injectable } from '@angular/core';
import { Counter } from '../model/counter';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public servingData: any;
  public counters: any;

  constructor () {
    this.counters = {
      '1': new Counter(1, 0),
      '2': new Counter(2, 0),
      '3': new Counter(3, 0),
      '4': new Counter(4, 0)
    }

    this.servingData = {
      numServing: 0,
      latestNumber: 0
    }
  }

  getCounters(): any {
    return this.counters;
  }

  getServingData(): any {
    return this.servingData;
  }

  takeNextNumber(): void {
    this.servingData.latestNumber++;
  }

  counterCompleteCurrent(counterId: number): void {
    this.toggleCounterBusy(counterId);
  }

  counterTakeNext(counterId: number): void {
    this.toggleCounterBusy(counterId);

    const counter = this.counters[counterId];
    counter.setNumServing(++this.servingData.numServing);
  }

  toggleCounterDisabled(counterId: number): void {
    const counter = this.counters[counterId];
    counter.disabled = !counter.disabled;
  }

  toggleCounterBusy(counterId: number): void {
    const counter = this.counters[counterId];
    counter.busy = !counter.busy;
  }
}
