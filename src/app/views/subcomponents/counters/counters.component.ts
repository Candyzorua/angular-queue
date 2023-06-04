import { Component, Input } from '@angular/core';
import { Counter } from 'src/app/model/counter';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent {
  public counters: Array<Counter>;
  public servingData: any;
  @Input() showButtons!: boolean; 

  constructor(
    private counterService: CounterService,
  ) {
    this.counters = Object.values(this.counterService.getCounters());
    this.servingData = this.counterService.getServingData();
  }

  counterCompleteCurrent(counterId: number): void {
    this.counterService.counterCompleteCurrent(counterId);
  }

  counterTakeNext(counterId: number): void {
    this.counterService.counterTakeNext(counterId);
  }

  toggleCounterDisabled(counterId: number): void {
    this.counterService.toggleCounterDisabled(counterId);
  }
}
