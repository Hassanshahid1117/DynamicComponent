import { Directive, ViewContainerRef } from '@angular/core';

export interface DynamicComponent  {
    data: any;  

}   

@Directive({
  selector: '[appDynamic]'
})
export class DynamicDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }  

}
