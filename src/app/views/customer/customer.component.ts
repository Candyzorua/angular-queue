import { Component } from '@angular/core';
import { Counter } from 'src/app/model/counter';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  public counters: Array<Counter>;
  public servingData: any;

  constructor(
    private counterService: CounterService
  ) {
    this.counters = Object.values(this.counterService.getCounters());
    this.servingData = this.counterService.getServingData();
  }

  takeNextNumber(): void {
    this.counterService.takeNextNumber();
  }
}
