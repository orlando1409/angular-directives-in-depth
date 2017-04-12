import {Directive, ElementRef, ViewContainerRef, TemplateRef} from '@angular/core';

@Directive({
  selector: '[structural]'  
})
export class StructuralDirective {
  constructor(el: ElementRef,
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {
    console.log(el.nativeElement);
  }

  ngAfterViewInit(){
    this.view.createEmbeddedView(this.template, {
      $implicit: 'Awesome'
    });
  }
}
