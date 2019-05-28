import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {MarketPrice} from './market-price';
import { Subject, from } from  'rxjs';
//import * as socketio from 'socket.io-client';  you can use socket as well

@Injectable({
  providedIn: 'root'
})
export class MarketStatusService {

  private baseUrl =  'http://10.1.4.95:8000';
  constructor(private httpClient: HttpClient) { }

  getInitialMarketStatus() {
    return this.httpClient.get<MarketPrice[]>(`${this.baseUrl}/basic/ui_info`);
  }
}