import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaymentsComponent,
    PaymentsListComponent,
    AddPaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PaymentsModule { }
