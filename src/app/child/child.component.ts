import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() data:any
  @Input() fromparent="string";
  @Input()myinputfromparent="string";
@Output() myoutputfromchild:EventEmitter<string>= new EventEmitter();
outputstring="hi am your child";
@Input () demo= "string";
@Input() demo2="string";
@Output() demooutputchild2: EventEmitter<string>= new EventEmitter();
output2string="i m your child 2";
@Output() demooutput3:EventEmitter<string>= new EventEmitter();
output3strintg="i m your child 3";
@Input() demooutptochild="string";
  constructor() { }
  senddata3(){
    this.demooutput3.emit(this.output3strintg);
  }
  senddata2(){
    this.demooutputchild2.emit(this.output2string);
  }
  senddata(){
    this.myoutputfromchild.emit(this.outputstring);
  }
  senddata4(){
    }
 
  ngOnInit(): void {
    console.log (this.fromparent);
    document.write (this.fromparent)
    console.log(this.myinputfromparent);
    document.write(this.myinputfromparent)
    console.log(this.demo);
    console.log(this.demo2);  
    console.log(this.demooutptochild);  
  }
}
