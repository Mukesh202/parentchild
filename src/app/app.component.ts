import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'ptochild';
 inputvariable="i m parent";
 parentvariable='parent to child from demo purpose';
 demotochild3="demo from parent to child 4";
 demotochild="demo from parent to child";
demochild2= " demo parent 2";
fromappparent2="from main parent component";
fromappparent="from main app-parent";
tochild="this is from main app component";
tochildpartnew="thi is new demo";
 getdata(value:any)
 {
   console.log(value);
 }
 getdata2(value:any)
 {
   console.log(value);
 }
 getdata3( value:any)
 {
  console.log(value);
  }

  data(value:any){
    console.log(value);
  }

  getdata4(value:any){
    console.log(value);
      }

      getdatafromchild(value:any){
        console.log(value);
      }
      private Exampleobject : {name:string,email?:string }
      constructor(){
        this.Exampleobject={
          name: 'pytosoft',
          email: 'mukesh.kumar@pytosoft.com'
        }
      }

}
