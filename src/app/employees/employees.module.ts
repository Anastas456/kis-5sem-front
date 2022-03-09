import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
