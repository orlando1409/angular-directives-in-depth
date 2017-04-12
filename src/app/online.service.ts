import { Injectable } from '@angular/core';

@Injectable()
export class OnlineService {
  online = true;
  constructor() { 
    console.log('test');
    setInterval(()=>{
      const number = Math.random() > .5; 
      console.log(number);
      this.online = number;
    }, 1000);
  }
}
