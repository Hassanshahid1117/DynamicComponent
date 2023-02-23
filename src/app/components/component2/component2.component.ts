import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DynamicComponent } from 'src/app/interfaces/interfaces';
import { inputModel, outputModel } from 'src/app/models/inputModel';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss'],
})
export class Component2Component
  implements DynamicComponent<inputModel, outputModel>
{
  @Input('data') data!: inputModel;
  @Output('notifyparent') notifyparent: EventEmitter<outputModel> =
    new EventEmitter<outputModel>();
  outputModel: outputModel = new outputModel();
  constructor() {}

  ngOnInit(): void {
    alert(this.data);
    if (this.data) alert('Input Received- ' + JSON.stringify(this.data));
  }

  click(data: string) {
    this.outputModel.Field1 = data;
    this.notifyparent.emit(this.outputModel);
  }
}
