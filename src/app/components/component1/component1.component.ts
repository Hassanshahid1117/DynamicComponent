import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DynamicComponent } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements DynamicComponent {
  @Input('data') data!: any
  @Output('notifyparent') notifyparent:EventEmitter<any>=new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

}
