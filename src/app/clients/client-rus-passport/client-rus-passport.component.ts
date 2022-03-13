import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rus_passport } from 'src/app/shared/models/Client.model';
import { ClientsServiceService } from 'src/app/shared/services/clients-service.service';

@Component({
  selector: 'app-client-rus-passport',
  templateUrl: './client-rus-passport.component.html',
  styleUrls: ['./client-rus-passport.component.css']
})
export class ClientRusPassportComponent implements OnInit {

  rusPassport?:Rus_passport;
  id?:any;      //id клиента
  rusPasForm!: FormGroup;
  new?:Boolean;

  constructor( private activetedRoute: ActivatedRoute,
    private clientService:ClientsServiceService,
    private router: Router) {
    this.activetedRoute.params.subscribe(params =>{
      if (params['id'] !==null && params['id']!==undefined){
      this.id=+params['id'];
    }
    else{
      this.id=null;
    }
  })
   }

  ngOnInit(): void {
    this.rusPasForm= new FormGroup({
      passport_series: new FormControl(null, [Validators.required]),
      passport_number:new FormControl(null, [Validators.required]),
      date_of_issue:new FormControl(null, [Validators.required]),
      expiration_date:new FormControl(null, [Validators.required]),
      issuing_authority:new FormControl(null, [Validators.required]),
      client:new FormControl(this.id)
    });
    this.getData();
    
  }

  async getData(){
    if(this.id !==null && this.id !==undefined){
      try{
        let rusPassport=this.clientService.getRusPas(this.id);
        this.rusPassport= await rusPassport;
        if (this.rusPassport?.id == null || this.rusPassport == undefined){
          this.new = true
        }
        else{
          this.new = false
        }
      }
      catch(err){
        console.error(err);
      }
      this.rusPasForm.patchValue({
        passport_series: this.rusPassport?.passport_series,
        passport_number: this.rusPassport?.passport_number,
        date_of_issue: this.rusPassport?.date_of_issue,
        expiration_date: this.rusPassport?.expiration_date,
        issuing_authority: this.rusPassport?.issuing_authority,
        client: this.rusPassport?.client
      })
    }
}

async onSave() {
  if (this.new == false){
    this.clientService.updateRusPass(this.rusPassport?.id, this.rusPasForm.value)
      .subscribe(
        response => {
          // console.log(response);
          alert('Изменения сохранены');
        },
        error => {
          console.log(error);
        }); 
  }
  else{
    this.clientService.createRusPas(this.rusPasForm.value)
      .subscribe(
        response => {
          // console.log(response);
          alert('Новый российский паспорт добавлен');
          this.router.navigate(['/clients']);
        },
        error => {
          console.log(error);
        });
  }
}


}
