import { Directive, Input, HostListener } from '@angular/core';
import { TrackingService } from "app/tracking.service";

@Directive({
  selector: '[track]'
})
export class TrackDirective {

  constructor(private tracking:TrackingService){ }

  @Input() track;

  @HostListener('click')
  onClick(){
    this.tracking.log({event:'click', message:this.track});
  }

  @HostListener('mouseover')
  onMouseover(){
    this.tracking.log({event:'mouseover', message:this.track});
  }
  
}
