import { Directive, EventEmitter, ViewContainerRef } from '@angular/core';

export interface DynamicComponent <inputType,OutputType> {
    data: inputType;  
    notifyparent: EventEmitter<OutputType>;  
}   
 

@Directive({
  selector: '[appDynamic]'
})
export class DynamicDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }  

}
