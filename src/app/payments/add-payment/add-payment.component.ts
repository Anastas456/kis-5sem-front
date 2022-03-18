import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contract } from 'src/app/shared/models/Contract.model';
import { Organization } from 'src/app/shared/models/Employee.model';
import { Currency } from 'src/app/shared/models/Payment.model';
import { AgreementServiceService } from 'src/app/shared/services/agreement-service.service';
import { PaymentServiceService } from 'src/app/shared/services/payment-service.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  paymentForm!:FormGroup;
  contracts?: Contract[];
  organizations?: Organization[];
  currencies?: Currency[];

  constructor(private paymentService: PaymentServiceService,
    private router: Router,
    private agreementService: AgreementServiceService) { }

  ngOnInit(): void {
    this.paymentForm= new FormGroup({
      organization: new FormControl(null, [Validators.required]),
      contract:new FormControl(null, [Validators.required]),
      amount_in_rubles:new FormControl(null, [Validators.required]),
      currency:new FormControl(null, [Validators.required])
    });
    this.getOrganizations();

    this.paymentForm.get('organization')?.valueChanges.subscribe((value) => {
      this.getContracts(value);
    });

    this.getCurrency();
  }


  getOrganizations(){
    this.agreementService.getAllOrganizations()
      .subscribe(
        data => {
          this.organizations = data;
          // console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getContracts(organization: any){
    this.paymentService.getContractsByOrganization(organization)
      .subscribe(
        data => {
          this.contracts = data;
          // console.log(data);
          
        },
        error => {
          console.log(error);
        }
      );
  }

  getCurrency(){
    this.paymentService.getAllCurrency()
      .subscribe(
        data => {
          this.currencies = data;
          // console.log(data);
          
        },
        error => {
          console.log(error);
        }
      );
  }

  onSave() {
    this.paymentService.createPayment(this.paymentForm.value)
      .subscribe(
        response => {
          // console.log(response);
          alert(`Новый оплата добавлена`);
          this.router.navigate(['/payments']);
        },
        error => {
          console.log(error);
        });

      }

}
