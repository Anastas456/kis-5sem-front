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
  },
  {
    path:'agreements',
    loadChildren: ()=>
      import('./agreements/agreements.module').then((m) => m.AgreementsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
