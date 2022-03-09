import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [
  {
    path:'',
    component:EmployeesComponent,
    children:[
      {
        path:'',
        component:EmployeesListComponent
      },
      {
        path:'empoloyeedetail',
        component: EmployeeDetailComponent
      },
      {
        path:'empoloyeedetail/:id',
        component:EmployeeDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
