import { Injectable } from '@angular/core';

@Injectable()
export class TrackingService {
  logs = [];
  log(trackingEvent){
    this.logs.push(trackingEvent);
    console.log(trackingEvent);
    //console.log(this.logs);
  }
  constructor() { }

}
