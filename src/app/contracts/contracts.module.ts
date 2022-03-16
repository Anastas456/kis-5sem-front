import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsComponent } from './contracts.component';
import { ContractsListComponent } from './contracts-list/contracts-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TripMembersComponent } from './trip-members/trip-members.component';
import { RoutesComponent } from './routes/routes.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { AddTripMembersComponent } from './add-trip-members/add-trip-members.component';
import { AddRouteComponent } from './add-route/add-route.component';


@NgModule({
  declarations: [
    ContractsComponent,
    ContractsListComponent,
    TripMembersComponent,
    RoutesComponent,
    AddContractComponent,
    AddTripMembersComponent,
    AddRouteComponent
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContractsModule { }
