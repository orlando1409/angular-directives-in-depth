import {Directive, ViewContainerRef, TemplateRef} from '@angular/core';
import {StorageService} from "app/storage.service";

@Directive({
  selector: '[surround]'
})
export class SurroundDirective {

  constructor(
    private service: StorageService,
    private view: ViewContainerRef,
    private template: TemplateRef<any>
    ) { }

    ngAfterViewInit(){
      this.view.createEmbeddedView(this.service.templates.get('header'));
      this.view.createEmbeddedView(this.template);
      this.view.createEmbeddedView(this.service.templates.get('footer'));
    }    

}
