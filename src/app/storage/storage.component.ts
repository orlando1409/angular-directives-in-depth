import {Component, OnInit, ViewChild} from '@angular/core';
import {StorageService} from "app/storage.service";

@Component({
  selector: 'storage',
  template: `
    <template #header><h1>I'm a header</h1></template>
    <template #footer><h2>I'm a footer</h2></template>
  `,
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
  @ViewChild('header') headerTemplate;
  @ViewChild('footer') footerTemplate;

  constructor(private service: StorageService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.service.templates.set('header', this.headerTemplate);
    this.service.templates.set('footer', this.footerTemplate);
  }
}
