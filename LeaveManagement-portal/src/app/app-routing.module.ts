import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeaveAddComponent} from './leave-add/leave-add.component';
import {LeaveListComponent} from './leave-list/leave-list.component';
import {EmployeeAddComponent} from './employee-add/employee-add.component';

const routes: Routes = [
  {path:"addleave",component:LeaveAddComponent},
  {path:"",component:LeaveListComponent},
  {path:"addemployee",component:EmployeeAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
