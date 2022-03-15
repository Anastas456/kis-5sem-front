import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agreement, Visiting_city } from 'src/app/shared/models/Agreement.model';
import { AgreementServiceService } from 'src/app/shared/services/agreement-service.service';

@Component({
  selector: 'app-agreement-list',
  templateUrl: './agreement-list.component.html',
  styleUrls: ['./agreement-list.component.css']
})
export class AgreementListComponent implements OnInit {

  constructor(private agreementService: AgreementServiceService,
    private router: Router) { }

  agreements?: Agreement[];

  ngOnInit(): void {
    this.retrieveAgreements();
  }

  async retrieveAgreements()  {
    this.agreementService.getAllAgreements()
      .subscribe(
        data => {
          this.agreements = data;
          // console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  onAddAgreement(){
    this.router.navigate([this.router.url, 'add-agreement']);
  }

  onSeeVisitingCities(id:number){
    this.router.navigate(['agreements/visiting-cities', id]);
  }

}
