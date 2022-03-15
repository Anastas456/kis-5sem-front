import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Agreement, Country } from 'src/app/shared/models/Agreement.model';
import { Client } from 'src/app/shared/models/Client.model';
import { Employee, Organization } from 'src/app/shared/models/Employee.model';
import { AgreementServiceService } from 'src/app/shared/services/agreement-service.service';
import { ClientsServiceService } from 'src/app/shared/services/clients-service.service';

@Component({
  selector: 'app-add-agreement',
  templateUrl: './add-agreement.component.html',
  styleUrls: ['./add-agreement.component.css']
})
export class AddAgreementComponent implements OnInit {

  agreement?:Agreement;
  agreementForm!:FormGroup;
  organizations?: Organization[];
  employees?: Employee[];
  countries?: Country[];
  clients?: Client[];

  constructor(private agreementService: AgreementServiceService,
    private clientService: ClientsServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.agreementForm= new FormGroup({
      number_of_trip_members: new FormControl(null, [Validators.required]),
      start_date_of_trip:new FormControl(null, [Validators.required]),
      end_date_of_trip:new FormControl(null, [Validators.required]),
      organization:new FormControl(null, [Validators.required]),
      employee:new FormControl(null, [Validators.required]),
      country_of_visit:new FormControl(null, [Validators.required]),
      client:new FormControl(null, [Validators.required])
    });
    this.getOrganizations();

    this.agreementForm.valueChanges.subscribe(value => {
      if (value.organization !== null && value.organization !== undefined){
        this.getEmployees();
      }
    });

    this.getCountries();
    this.getClients();
  }

  async onSave() {
      this.agreementService.creareAgreement(this.agreementForm.value)
        .subscribe(
          response => {
            // console.log(response);
            alert(`Новое соглашение добавлено`);
            this.router.navigate(['agreements/add-cities', response.id]);
          },
          error => {
            console.log(error);
          });
  }

  async getOrganizations(){
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

  async getEmployees(){
    this.agreementService.getEmployeesByOrganization(this.agreementForm.value.organization)
      .subscribe(
        data => {
          this.employees = data;
          // console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  async getCountries(){
    this.agreementService.getAllCountries()
      .subscribe(
        data => {
          this.countries = data;
          // console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  async getClients(){
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
    
  

}
