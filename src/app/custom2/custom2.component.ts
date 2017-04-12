import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom2',
  template: `
  <template #foo2>
    <br/>
    <h2>content inside the template using [ngTemplateOutlet] - foo</h2>
  </template>
  <template #bar2 let-message="message">
    <br/>
    <h2>content inside the template using [ngTemplateOutlet] - bar: {{message}}</h2>
  </template>  
  <div [ngTemplateOutlet]="foo2"></div>
  <div [ngTemplateOutlet]="bar2" [ngOutletContext]="one"></div>
  <div [ngTemplateOutlet]="foo2"></div>
  <div [ngTemplateOutlet]="bar2" [ngOutletContext]="two"></div>
  <div [ngTemplateOutlet]="bar2" [ngOutletContext]="three"></div>
  `,
  styleUrls: ['./custom2.component.css']
})
export class Custom2Component implements OnInit {
  one = {message:'One Hello Context'};
  two = {message:'Two Hello Context'};
  three = {message:'Three Hello Context'};

  constructor() { }

  ngOnInit() {  }

}
