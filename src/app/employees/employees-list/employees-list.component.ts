import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/shared/models/Employee.model';
import { EmployeesServiceService } from 'src/app/shared/services/employees-service.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  constructor(private employeeService: EmployeesServiceService,
    private router: Router) { }

  empoloyees?: Employee[]

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  retrieveEmployees(): void {
    this.employeeService.getAllEmployees()
      .subscribe(
        data => {
          this.empoloyees = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  onAddEmployee(){
    this.router.navigate([this.router.url, 'empoloyeedetail']);
  }

  onDetailEmployee(id:any){
    this.router.navigate([this.router.url, 'empoloyeedetail', id]);
  }

  

}
