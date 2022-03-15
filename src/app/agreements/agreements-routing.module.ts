import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgreementComponent } from './add-agreement/add-agreement.component';
import { AddCitiesComponent } from './add-cities/add-cities.component';
import { AgreementListComponent } from './agreement-list/agreement-list.component';
import { AgreementsComponent } from './agreements.component';
import { VisitingCitiesComponent } from './visiting-cities/visiting-cities.component';

const routes: Routes = [
  {
    path:'',
    component:AgreementsComponent,
    children:[
      {
        path:'',
        component:AgreementListComponent
      },
      {
        path:'visiting-cities/:id',
        component: VisitingCitiesComponent
      },
      {
        path:'add-agreement',
        component:AddAgreementComponent
      },
      {
        path:'add-cities/:id',
        component: AddCitiesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgreementsRoutingModule { }
