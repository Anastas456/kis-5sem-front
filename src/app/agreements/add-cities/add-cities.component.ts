import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Agreement, City } from 'src/app/shared/models/Agreement.model';
import { AgreementServiceService } from 'src/app/shared/services/agreement-service.service';

@Component({
  selector: 'app-add-cities',
  templateUrl: './add-cities.component.html',
  styleUrls: ['./add-cities.component.css']
})
export class AddCitiesComponent implements OnInit {

  id?: any;
  agreement?:Agreement;
  cities?: City[];
  visitingCitiesForm!:FormGroup;

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

    this.visitingCitiesForm= new FormGroup({
      preliminary_agreement: new FormControl(this.id, [Validators.required]),
      city:new FormControl(null, [Validators.required])
    });

    this.getAgreement();
    // this.getCities();

    
  }

  async onSave() {
    if (this.id !== null && this.id !==undefined){
      this.agreementService.addVisitingCity(this.visitingCitiesForm.value)
        .subscribe(
          response => {
            // console.log(response);
            alert('Новый город посещения добавлен');
          },
          error => {
            console.log(error);
          });
    }
  }
    

  async getAgreement(){
    if(this.id !==null && this.id !==undefined){
      try{
        let agreement=this.agreementService.getAgreement(this.id);
        this.agreement= await agreement;
        // console.log(this.agreement);
        this.getCities();
      }
      catch(err){
        console.error(err);
      }
    }
    
    
  }

  getCities(){
    this.agreementService.getCitiesByCountry(this.agreement?.country_of_visit)
      .subscribe(
        data => {
          this.cities = data;
          // console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
