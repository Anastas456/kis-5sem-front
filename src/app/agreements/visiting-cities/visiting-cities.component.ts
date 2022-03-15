import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Visiting_city } from 'src/app/shared/models/Agreement.model';
import { AgreementServiceService } from 'src/app/shared/services/agreement-service.service';

@Component({
  selector: 'app-visiting-cities',
  templateUrl: './visiting-cities.component.html',
  styleUrls: ['./visiting-cities.component.css']
})
export class VisitingCitiesComponent implements OnInit {

  id?:any;
  visitingCities?: Visiting_city[];


  constructor(private activatedRoute: ActivatedRoute,
    private agreementService: AgreementServiceService) {
      this.activatedRoute.params.subscribe(params =>{
        if (params['id'] !==null && params['id']!==undefined){
          this.id=+params['id'];
        }
        else{
          this.id=null;
        }
      })
     }

  ngOnInit(): void {
    this.getVisitingCities();
  }

  async getVisitingCities(){
    this.agreementService.getVisitingCitiesByAgreement(this.id)
      .subscribe(
        data => {
          this.visitingCities = data;
          // console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
