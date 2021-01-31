import { trigger, animate, state, style, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations:[
    trigger("openClose",[
      state('open',style({
        height:'200px',
        backgroundColor:'red',
        opacity:1
      })),
      state('closed',style({
        height:'100px',
        backgroundColor:'yellow',
        opacity:.5
      })),
      transition('open=>closed',[
        animate('1s')
      ]),
      transition('closed=>open',[
        animate('0.5s')
      ]),
    ])
  ]
})
export class AnimationsComponent implements OnInit {
toggle=false;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.toggle=!this.toggle;
  }

}
