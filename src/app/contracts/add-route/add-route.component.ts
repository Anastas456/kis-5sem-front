import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Contract, Hotel_reservation, Route } from 'src/app/shared/models/Contract.model';
import { ContractServiceService } from 'src/app/shared/services/contract-service.service';

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.css']
})
export class AddRouteComponent implements OnInit {

  id?:any;
  contract?:Contract;
  reservations?: Hotel_reservation[];
  routeForm!:FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private contractService: ContractServiceService) {
      this.activatedRoute.params.subscribe(params =>{
      if (params['id'] !==null && params['id']!==undefined){
        this.id=+params['id'];
      }
      else{
        this.id=null;
      }
    }) }

  ngOnInit(): void {
    this.routeForm= new FormGroup({
      contract: new FormControl(this.id, [Validators.required]),
      hotel_reservation:new FormControl(null, [Validators.required])
    });

    this.getContract();
  }

  async getContract(){
    if(this.id !==null && this.id !==undefined){
      try{
        let contract=this.contractService.getContract(this.id);
        this.contract= await contract;
        // console.log(this.agreement);
        this.getReservations();
      }
      catch(err){
        console.error(err);
      }
    }
  }

  getReservations(){
    this.contractService.getAllHotelReservation()
      .subscribe(
        data => {
          this.reservations = data;
          // console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  onSave() {
    if (this.id !== null && this.id !==undefined){
      this.contractService.addRoute(this.routeForm.value)
        .subscribe(
          response => {
            // console.log(response);
            alert('Новый маршрут добавлен');
          },
          error => {
            console.log(error);
          });
    }
  }

}
