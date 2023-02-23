import { Directive, EventEmitter, ViewContainerRef } from '@angular/core';

export interface DynamicComponent  {
    data: any;  
    notifyparent: EventEmitter<any>;  

}   

@Directive({
  selector: '[appDynamic]'
})
export class DynamicDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }  

}
