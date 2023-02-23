import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DynamicComponent } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss'],
})
export class Component2Component implements DynamicComponent {
   @Input('data') data!: any
   @Output('notifyparent') notifyparent:EventEmitter<any>=new EventEmitter<any>()
  constructor() {}

  ngOnInit(): void {
    alert(this.data)
    if (this.data) alert('Input Received- ' + JSON.stringify(this.data));
  }

  click(){
    this.notifyparent.emit("element clicked")
  }
}
