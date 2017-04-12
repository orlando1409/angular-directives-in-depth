import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'structural2',
  template: `
    <h1 *structural2="let message">{{message}}</h1>
  `  
})
export class Structural2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
