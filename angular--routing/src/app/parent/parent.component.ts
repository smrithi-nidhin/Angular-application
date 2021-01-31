import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
data1="data111";
clickCount=0;
list=["sample 1"];
  constructor() { }

  ngOnInit(): void {
  }
   onNewItemSave(event){
     this.list.push(event);
   }
  onItemClick(event){
    this.clickCount+=event;
  }
}
