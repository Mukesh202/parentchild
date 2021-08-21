import { Component, OnInit } from '@angular/core';
import { FormControl,FormArray,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.scss']
})
export class FormcontrolComponent implements OnInit {

  username= new FormControl('',Validators.required);
  password= new FormControl

  constructor() { }

  ngOnInit(): void {
  }

  onsubmit(){
    console.log(this.username.value+this.password.value);
  }

}
