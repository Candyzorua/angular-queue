import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  public servingData: any;

  constructor(
    private counterService: CounterService,
  ) {
    this.servingData = this.counterService.getServingData();
  }
}
