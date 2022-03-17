import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { PaymentsComponent } from './payments.component';

const routes: Routes = [
  {
    path:'',
    component:PaymentsComponent,
    children:[
      {
        path:'',
        component: PaymentsListComponent
      },
      {
        path:'add-payment',
        component: AddPaymentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
