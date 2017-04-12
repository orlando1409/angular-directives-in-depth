import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'structural3',
  template: `
    <h1 *structural3="let message from messages">{{message}}</h1>
  `  
})
export class Structural3Component implements OnInit {
  messages = {
    one: 'One is awesome',
    two: 'Two is better',
    three: 'Thre is the best!'
  }

  constructor() {
    setInterval(() =>{
      this.messages = {
        one: 'one is bad ' + Math.random().toString().slice(0,3),
        two: 'Tow is worse '+ Math.random().toString().slice(0,3),
        three: 'Three is the worst '+ Math.random().toString().slice(0,3)
      }
    }, 1000);

  }

  ngOnInit() {
  }
}
