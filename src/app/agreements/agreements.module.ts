import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgreementsRoutingModule } from './agreements-routing.module';
import { AgreementsComponent } from './agreements.component';
import { AddAgreementComponent } from './add-agreement/add-agreement.component';
import { AgreementListComponent } from './agreement-list/agreement-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCitiesComponent } from './add-cities/add-cities.component';
import { VisitingCitiesComponent } from './visiting-cities/visiting-cities.component';


@NgModule({
  declarations: [
    AgreementsComponent,
    AddAgreementComponent,
    AgreementListComponent,
    AddCitiesComponent,
    VisitingCitiesComponent
  ],
  imports: [
    CommonModule,
    AgreementsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AgreementsModule { }
