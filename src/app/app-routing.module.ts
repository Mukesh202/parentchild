import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';

const routes: Routes = [
  {path:'formcontrol',component:FormcontrolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
