import { Injectable } from '@angular/core';
import {Orders} from "../func/Orders";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private url = 'Orders';

  constructor(private  httpClient: HttpClient) { }

  save(orders: Orders): any{
    console.log(orders);
    return this.httpClient.post(`${this.url}`, orders);
  }
}
