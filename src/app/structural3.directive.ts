import {Directive, ElementRef, ViewContainerRef, TemplateRef, Input} from '@angular/core';

@Directive({
  selector: '[structural3]'  
})
export class Structural3Directive {
  @Input() set structural3From({one, two, three}){
    this.view.clear();

    this.view.createEmbeddedView(this.template, {
      $implicit: one
    });
    this.view.createEmbeddedView(this.template, {
      $implicit: two
    });
    this.view.createEmbeddedView(this.template, {
      $implicit: three
    });   
  }

  constructor(el: ElementRef,
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {
      console.log(el.nativeElement);
  }

  ngAfterViewInit(){
  }
}
