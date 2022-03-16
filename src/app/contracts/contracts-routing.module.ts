import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContractComponent } from './add-contract/add-contract.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { AddTripMembersComponent } from './add-trip-members/add-trip-members.component';
import { ContractsListComponent } from './contracts-list/contracts-list.component';
import { ContractsComponent } from './contracts.component';
import { RoutesComponent } from './routes/routes.component';
import { TripMembersComponent } from './trip-members/trip-members.component';

const routes: Routes = [
  {
    path:'',
    component:ContractsComponent,
    children:[
      {
        path:'',
        component:ContractsListComponent
      },
      {
        path:'trip_members/:id',
        component: TripMembersComponent
      },
      {
        path:'routes/:id',
        component: RoutesComponent
      },
      {
        path:'add-contract',
        component: AddContractComponent
      },
      {
        path:'add-trip-members/:id',
        component:AddTripMembersComponent
      },
      {
        path:'add-route/:id',
        component: AddRouteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }
