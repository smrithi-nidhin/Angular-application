import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  newInput="";
  toggle=false;
@Input('data') parentData:String;
@Output('onItemClick') newEvent = new EventEmitter<number>();


@Input('name') parentName:String;
@Output() onNewItemSave = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.toggle=!this.toggle;
    this.newEvent.emit(1);
  }
  save()
  {
    this.onNewItemSave.emit(this.newInput);
  }

}
