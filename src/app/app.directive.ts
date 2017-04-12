import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[first]'
})
export class AppDirective {

  constructor() { }

  @HostBinding() innerText = `I'm a directive!`;

}
