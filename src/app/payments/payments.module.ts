import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyListComponent } from './currency-list/currency-list.component';


@NgModule({
  declarations: [
    PaymentsComponent,
    PaymentsListComponent,
    AddPaymentComponent,
    CurrencyListComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PaymentsModule { }
