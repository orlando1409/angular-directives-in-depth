import {Directive, ElementRef, ViewContainerRef, TemplateRef, Input} from '@angular/core';

@Directive({
  selector: '[structural2]'  
})
export class Structural2Directive {
  @Input() set structural2(value){
    this.view.createEmbeddedView(this.template, {
      $implicit: 'Awesome'
    });
    this.view.createEmbeddedView(this.template, {
      $implicit: 'Amazing'
    });
    this.view.createEmbeddedView(this.template, {
      $implicit: 'Sweet'
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
