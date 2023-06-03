import { Component, Input } from '@angular/core';
import { Counter } from '../../model/counter';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  public counters: Array<Counter>;
  public servingData: any;

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
