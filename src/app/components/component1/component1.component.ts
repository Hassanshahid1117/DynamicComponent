import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DynamicComponent } from 'src/app/interfaces/interfaces';
import { inputModel, outputModel } from 'src/app/models/inputModel';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements DynamicComponent<inputModel,outputModel> {
  @Input('data') data!: inputModel
  @Output('notifyparent') notifyparent:EventEmitter<outputModel>=new EventEmitter<outputModel>()
  outputModel:outputModel=new outputModel();
  constructor() { }

  ngOnInit(): void {
  }
  click(data:string){
    this.outputModel.Field1=data;
    this.notifyparent.emit(this.outputModel)
  }

}
