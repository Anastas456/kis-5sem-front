import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=>
      import('./employees/employees.module').then((m) => m.EmployeesModule),
  },
  {
    path:'employees',
    loadChildren: ()=>
      import('./employees/employees.module').then((m) => m.EmployeesModule),
  },
  // {
  //   path:'clients'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
