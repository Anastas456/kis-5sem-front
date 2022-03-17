import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/shared/models/Payment.model';
import { PaymentServiceService } from 'src/app/shared/services/payment-service.service';

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.css']
})
export class PaymentsListComponent implements OnInit {

  payments?: Payment[];

  constructor(private paymentService:PaymentServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.retrievePayments();
  }

  retrievePayments()  {
    this.paymentService.getAllPayment()
      .subscribe(
        data => {
          this.payments = data;
          // console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  onAddPayment(){
    this.router.navigate(['payments/add-payment']);
  }

}
