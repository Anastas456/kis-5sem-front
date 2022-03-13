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
  {
    path:'clients',
    loadChildren: ()=>
      import('./clients/clients.module').then((m) => m.ClientsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
