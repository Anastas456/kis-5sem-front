import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/shared/models/Payment.model';
import { PaymentServiceService } from 'src/app/shared/services/payment-service.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  currencies?:Currency[];
  call? = null;

  constructor(private paymentService: PaymentServiceService) { }

  ngOnInit(): void {
    this.retrieveCurrency();
  }

  retrieveCurrency()  {
    this.paymentService.getAllCurrency()
      .subscribe(
        data => {
          this.currencies = data;
          // console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  onARefreshCurrency(){
    this.paymentService.updateCurrency(this.call)
      .subscribe(
        response => {
          // console.log(response);
          this.retrieveCurrency();
        },
        error => {
          console.log(error);
        });

  }
    

}
