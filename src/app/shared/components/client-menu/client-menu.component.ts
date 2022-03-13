import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-menu',
  templateUrl: './client-menu.component.html',
  styleUrls: ['./client-menu.component.css']
})
export class ClientMenuComponent implements OnInit {

  id?: any;

  constructor(private activetedRoute: ActivatedRoute) { 
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
  }

}
