import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientMenuComponent } from '../shared/components/client-menu/client-menu.component';
import { ClientMainDataComponent } from './client-main-data/client-main-data.component';
import { ClientRusPassportComponent } from './client-rus-passport/client-rus-passport.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddClientComponent } from './add-client/add-client.component';


@NgModule({
  declarations: [
    ClientsComponent,
    ClientsListComponent,
    ClientDetailComponent,
    ClientMenuComponent,
    ClientMainDataComponent,
    ClientRusPassportComponent,
    AddClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
