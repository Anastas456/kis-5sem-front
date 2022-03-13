import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/models/Client.model';
import { ClientsServiceService } from 'src/app/shared/services/clients-service.service';

@Component({
  selector: 'app-client-main-data',
  templateUrl: './client-main-data.component.html',
  styleUrls: ['./client-main-data.component.css']
})
export class ClientMainDataComponent implements OnInit {

  client?:Client;
  id?:any;
  clientForm!:FormGroup;

  constructor(private clientService:ClientsServiceService,
    private activetedRoute: ActivatedRoute,
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
    this.clientForm= new FormGroup({
      status: new FormControl('Обычный', [Validators.required]),
      surname:new FormControl(null, [Validators.required]),
      name:new FormControl(null, [Validators.required]),
      patronymic:new FormControl(null, [Validators.required]),
      sex:new FormControl('М', [Validators.required]),
      date_of_birth:new FormControl(null, [Validators.required]),
      place_of_birth:new FormControl(null, [Validators.required])
    });
    this.getData();
  }

  async getData(){
    if(this.id !==null && this.id !==undefined){
    try{
      let client=this.clientService.getClient(this.id);
      this.client= await client;
    }
    catch(err){
      console.error(err);
    }
    this.clientForm.patchValue({
      status: this.client?.status,
      surname: this.client?.surname,
      name: this.client?.name,
      patronymic: this.client?.patronymic,
      sex: this.client?.sex,
      date_of_birth: this.client?.date_of_birth,
      place_of_birth: this.client?.place_of_birth
    })
  }
}

async onSave() {
  if (this.id !== null && this.id !==undefined){
    this.clientService.updateClient(this.id, this.clientForm.value)
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
    this.clientService.createClient(this.clientForm.value)
      .subscribe(
        response => {
          // console.log(response);
          alert(`Новый клиент создан`);
          this.router.navigate(['clients/add-client/rus-passport/', response.id]);
        },
        error => {
          console.log(error);
        });
  }
  
}

async onDelete(){
  this.clientService.deleteClient(this.id)
  .subscribe(
    response => {
      // console.log(response);
      this.router.navigate(['/clients']);
    },
    error => {
      console.log(error);
    });
}

}
