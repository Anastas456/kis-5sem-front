import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/models/Client.model';
import { Contract } from 'src/app/shared/models/Contract.model';
import { ClientsServiceService } from 'src/app/shared/services/clients-service.service';
import { ContractServiceService } from 'src/app/shared/services/contract-service.service';

@Component({
  selector: 'app-add-trip-members',
  templateUrl: './add-trip-members.component.html',
  styleUrls: ['./add-trip-members.component.css']
})
export class AddTripMembersComponent implements OnInit {

  id?:any;
  contract?:Contract;
  clients?:Client[];
  tripMemberForm!:FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private contractService: ContractServiceService,
    private clientService: ClientsServiceService) {
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
    this.tripMemberForm= new FormGroup({
      contract: new FormControl(this.id, [Validators.required]),
      client:new FormControl(null, [Validators.required])
    });

    this.getContract();
  }

  async getContract(){
    if(this.id !==null && this.id !==undefined){
      try{
        let contract=this.contractService.getContract(this.id);
        this.contract= await contract;
        // console.log(this.agreement);
        this.getClients();
      }
      catch(err){
        console.error(err);
      }
    }
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

  onSave(){
    if (this.id !== null && this.id !==undefined){
      this.contractService.addTripMember(this.tripMemberForm.value)
        .subscribe(
          response => {
            // console.log(response);
            alert('Новый участник поездки добавлен');
          },
          error => {
            console.log(error);
          });
    }
  }

  onAddRoute(){
    this.router.navigate(['contracts/add-route', this.id]);
  }
  

}
