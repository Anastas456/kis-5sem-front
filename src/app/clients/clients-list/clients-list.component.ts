import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/Client.model';
import { ClientsServiceService } from 'src/app/shared/services/clients-service.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  constructor(private clientService:ClientsServiceService,
    private router:Router) { }

  clients?:Client[]

  ngOnInit(): void {
    this.retrieveClients();
  }

  async retrieveClients()  {
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

  onAddClient(){
    this.router.navigate([this.router.url, 'add-client']);
  }

  onDetailClient(id:any){
    this.router.navigate([this.router.url, 'clientdetail', id, 'main-data', id]);
  }

}
