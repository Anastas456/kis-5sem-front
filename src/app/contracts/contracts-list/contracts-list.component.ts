import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contract } from 'src/app/shared/models/Contract.model';
import { ContractServiceService } from 'src/app/shared/services/contract-service.service';

@Component({
  selector: 'app-contracts-list',
  templateUrl: './contracts-list.component.html',
  styleUrls: ['./contracts-list.component.css']
})
export class ContractsListComponent implements OnInit {

  constructor(private contractService: ContractServiceService,
    private router: Router) { }

  contracts?:Contract[];

  ngOnInit(): void {
    this.retrieveContracts();
  }

  async retrieveContracts()  {
    this.contractService.getAllContracts()
      .subscribe(
        data => {
          this.contracts = data;
          // console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  onAddContract(){
    this.router.navigate(['contracts/add-contract']);
  }

  onSeeTripMembers(id:number){
    this.router.navigate(['contracts/trip_members', id]);
  }

  onSeeRoutes(id:number){
    this.router.navigate(['contracts/routes', id]);
  }

}
