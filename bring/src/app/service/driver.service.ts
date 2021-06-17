import {Injectable} from '@angular/core';
import {CommonService} from './common.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../func/User';
import {Observable, ReplaySubject} from 'rxjs';
import {Driver} from '../func/Driver';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private currentLoginDriver: Driver;
  private url = 'driver';


  constructor(private commonService: CommonService,
              private httpClient: HttpClient) {
  }

  public getCurrentLoginDriver(): Driver {
    this.currentLoginDriver = new Driver();
    this.httpClient.get<Driver>(`${this.url}/me`).pipe(tap((data) => {
      this.currentLoginDriver = data;
    }));
    return this.currentLoginDriver;
    ;
  }
}
