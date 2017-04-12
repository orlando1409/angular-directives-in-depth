import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[another]'
})
export class AnotherDirective {
  constructor() { }

  @Input() another;
  @HostBinding() get innerText(){
    return this.another;
  }
  @HostListener('click', ['$event']) onclick($event){
    console.log($event);
    this.another = 'click: ('+  $event.clientX+':'+$event.clientY + ')';
  }
}
