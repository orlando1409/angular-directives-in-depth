import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'structural',
  template: `
    <h1 *structural>Hello, Angular</h1>
  `  
})
export class StructuralComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
