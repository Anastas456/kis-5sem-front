import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Agreement } from 'src/app/shared/models/Agreement.model';
import { Client } from 'src/app/shared/models/Client.model';
import { Employee, Organization } from 'src/app/shared/models/Employee.model';
import { AgreementServiceService } from 'src/app/shared/services/agreement-service.service';
import { ClientsServiceService } from 'src/app/shared/services/clients-service.service';
import { ContractServiceService } from 'src/app/shared/services/contract-service.service';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {

  contractForm!: FormGroup;
  agreements?:Agreement[];
  agreement?:Agreement;
  organizations?:Organization[];
  employees?:Employee[];
  clients?:Client[];

  normDates = true;


  constructor(private contractService: ContractServiceService,
    private router: Router,
    private agreementService: AgreementServiceService,
    private clientService: ClientsServiceService) { }

  ngOnInit(): void {
    this.contractForm= new FormGroup({
      organization: new FormControl(null, [Validators.required]),
      agent:new FormControl(null, [Validators.required]),
      client:new FormControl(null, [Validators.required]),
      start_date_of_trip:new FormControl(null, [Validators.required]),
      end_date_of_trip:new FormControl(null, [Validators.required]),
      preliminary_agreement:new FormControl(null, [Validators.required])
    });

    this.getAllAgreements();

    this.contractForm.valueChanges.subscribe(value => {
      if (value.preliminary_agreement !== null && value.preliminary_agreement !== undefined){
        this.getAgreement(value.preliminary_agreement);
      }
    });

    this.getOrganizations();

    this.contractForm.valueChanges.subscribe(value => {
      if (value.organization !== null && value.organization !== undefined){
        this.getEmployees();
      }
    });

    this.getClients();

    this.contractForm.valueChanges.subscribe(value => {
      if (value.end_date_of_trip !== null && value.end_date_of_trip !== undefined){
        this.checkDates();
      }
    });

  }



  getAllAgreements(){
    this.agreementService.getAllAgreements()
      .subscribe(
        data => {
          this.agreements = data;
          // console.log(data);
          
        },
        error => {
          console.log(error);
        }
      );
  }

  async getAgreement(id:number){
      try{
        let agreement=this.agreementService.getAgreement(id);
        this.agreement= await agreement;
        // console.log(this.agreement);
      }
      catch(err){
        console.error(err);
      }

      // this.contractForm.patchValue({
      //   organization: this.agreement?.organization,
      //   agent: this.agreement?.employee,
      //   client: this.agreement?.client,
      //   start_date_of_trip: this.agreement?.start_date_of_trip,
      //   end_date_of_trip: this.agreement?.end_date_of_trip
      // })
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
        }
      );
  }

  getEmployees(){
    this.agreementService.getEmployeesByOrganization(this.contractForm.value.organization)
      .subscribe(
        data => {
          this.employees = data;
          // console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getClients(){
    this.clientService.getAllClients()
      .subscribe(
        data => {
          this.clients = data;
          // console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  checkDates(){
    if (this.contractForm.value.start_date_of_trip < this.contractForm.value.end_date_of_trip){
      this.normDates = true
    }
    else {
      this.normDates = false
    }
  }


  async onSave() {
    this.contractService.createContract(this.contractForm.value)
      .subscribe(
        response => {
          // console.log(response);
          alert(`Новый договор добавлен`);
          this.router.navigate(['contracts/add-trip-members', response.id]);
        },
        error => {
          console.log(error);
        });
}

}
