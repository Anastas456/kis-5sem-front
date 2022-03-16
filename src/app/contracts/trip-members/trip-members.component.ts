import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip_member } from 'src/app/shared/models/Contract.model';
import { ContractServiceService } from 'src/app/shared/services/contract-service.service';

@Component({
  selector: 'app-trip-members',
  templateUrl: './trip-members.component.html',
  styleUrls: ['./trip-members.component.css']
})
export class TripMembersComponent implements OnInit {

  id?:any;
  trip_members?:Trip_member[];

  constructor(private activatedRoute: ActivatedRoute,
    private contractService: ContractServiceService) { 
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
    this.getTripMembers();
  }

  getTripMembers(){
    this.contractService.getTripMembersByContract(this.id)
      .subscribe(
        data => {
          this.trip_members = data;
          // console.log(data);
        },
        error => {
          console.log(error);
        });

  }

}
