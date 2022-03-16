import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Route } from 'src/app/shared/models/Contract.model';
import { ContractServiceService } from 'src/app/shared/services/contract-service.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  id?:any;
  routes?: Route[];

  constructor(private activatedRoute: ActivatedRoute,
    private contractService:ContractServiceService) {
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
    this.getRoutes();
  }

  async getRoutes(){
    this.contractService.getRoutesByContract(this.id)
      .subscribe(
        data => {
          this.routes = data;
          // console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
