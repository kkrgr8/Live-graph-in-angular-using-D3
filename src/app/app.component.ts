import {Component} from '@angular/core';
import {MarketStatusService} from './market-status.service';
import {Observable} from 'rxjs';
import {MarketPrice} from './market-price';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  marketStatus: MarketPrice[];
  marketStatusToPlot: MarketPrice[];

  set MarketStatus(status: MarketPrice[]) {
    this.marketStatus = status;
    this.marketStatusToPlot = this.marketStatus.slice(0, 20);
  }

  constructor(private marketStatusSvc: MarketStatusService) {
  this.marketStatusSvc.getInitialMarketStatus()
    .subscribe(prices => {
      this.MarketStatus = prices;

    let marketUpdateObservable =  this.marketStatusSvc.getInitialMarketStatus();  // you can give different function

    let count = 0;
    const interval = setInterval(() => {
     marketUpdateObservable.subscribe(prices => {
        this.MarketStatus = prices;  // you can manipulate your data here
      });

    }, 3000);


    });
}
}