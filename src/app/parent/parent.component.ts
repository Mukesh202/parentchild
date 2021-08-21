import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @Input()parent="string";
  @Input()parent2="string";
  @Input()parent3="string";
 
  @Output() myoutput = new EventEmitter<string>();
  outputstring="hi i am your second child";
  @Output() myoutputpart2 = new EventEmitter<string>();
  outputstring2="hello i am your child third ok"
  
  constructor() { }
ngOnInit(): void {
console.log (this.parent);
console.log (this.parent2);
console.log(this.parent3);
  }
  senddata(){
  this.myoutput.emit(this.outputstring);
  }
senddatatoparent(){
this.myoutputpart2.emit(this.outputstring2);
}
}
