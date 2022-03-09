import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/shared/models/Employee.model';
import { EmployeesServiceService } from 'src/app/shared/services/employees-service.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  
  
  employee?:Employee;
  id?:any;
  employeeForm!:FormGroup;

  constructor(private activetedRoute: ActivatedRoute,
    private employeeService: EmployeesServiceService,
    private router: Router
    ) {
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
    this.employeeForm= new FormGroup({
      surname:new FormControl(null, [Validators.required]),
      name:new FormControl(null, [Validators.required]),
      patronymic:new FormControl(null, [Validators.required]),
      position:new FormControl('Агент', [Validators.required]),
      date_of_birth:new FormControl(null, [Validators.required]),
      photo:new FormControl(null, [Validators.required]),
      login:new FormControl(null, [Validators.required]),
      password:new FormControl(null, [Validators.required]),
      organization:new FormControl(1, [Validators.required]),
    });
    this.getData();
  }

  async getData(){
    if(this.id !==null && this.id !==undefined){
    try{
      let employee=this.employeeService.getEmployee(this.id);
      this.employee= await employee;
    }
    catch(err){
      console.error(err);
    }
    this.employeeForm.patchValue({
      surname: this.employee?.surname,
      name: this.employee?.name,
      patronymic: this.employee?.patronymic,
      position: this.employee?.position,
      date_of_birth: this.employee?.date_of_birth,
      photo: this.employee?.photo,
      login: this.employee?.login,
      password: this.employee?.password,
      organization: this.employee?.organization
    })
  }
}

async onSave() {
  if (this.id !== null && this.id !==undefined){
    this.employeeService.updateEmployee(this.id, this.employeeForm.value)
      .subscribe(
        response => {
          console.log(response);
          alert('Изменения сохранены');
        },
        error => {
          console.log(error);
        });
  }
  else{
    this.employeeService.createEmployee(this.employeeForm.value)
      .subscribe(
        response => {
          console.log(response);
          alert('Новый сотрудник создан');
        },
        error => {
          console.log(error);
        });
  }
  
}


async onDelete(){
  this.employeeService.deleteEmployee(this.id)
  .subscribe(
    response => {
      console.log(response);
      this.router.navigate(['/employees']);
    },
    error => {
      console.log(error);
    });
}

}
