import { Component, ComponentRef, OnInit, Type, ViewChild } from '@angular/core';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { DynamicComponent, DynamicDirective } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  @ViewChild(DynamicDirective, {static: true}) private dynamicHost!: DynamicDirective;  
 
  ComponentRef:ComponentRef<DynamicComponent>[]=[]
  public components : { type: Type<DynamicComponent>,data?:any }[] = [  
    { type: Component1Component },  
    { type: Component2Component,data:"hello" },  
  ];  

  title = 'DynamicComponents';
  ngOnInit(): void {
    this.loadComponent();  
  }
  private loadComponent(): void {  
    if (this.components.length === 0) return;  
    const viewContainerRef = this.dynamicHost.viewContainerRef;  
    viewContainerRef.clear();  
    this.components.forEach(x=>{
     const ref= viewContainerRef.createComponent<DynamicComponent>(x.type)
     ref.instance.data=x.data
      this.ComponentRef.push( ref);  
    });
   
}
getNotification(data:any){
      alert("received")
}
}