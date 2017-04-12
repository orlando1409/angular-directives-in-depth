import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'custom',
  template: `
  <template #foo>
    <br/>
    content inside the template using @ViewChild and createEmbeddedView
  </template>
  `,
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  @ViewChild('foo') template;

  constructor(private view:ViewContainerRef ){}

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.view.createEmbeddedView(this.template);
    this.view.createEmbeddedView(this.template);
    this.view.createEmbeddedView(this.template);
  }

}
