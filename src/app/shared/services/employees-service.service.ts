import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesServiceService {

  constructor(private http: HttpClient) { }

  getAllEmployees():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/employees/')
  }

  getEmployeeO(id: number): Observable<any> {
    return this.http.get(`http://127.0.0.1:8000/api/employees/${id}`);
  }

  getEmployee(id:number): Promise<any>{
    return this.getEmployeeO(id).toPromise();
  }

  createEmployee(data: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/employees/', data);
  }

  updateEmployee(id: any, data: any): Observable<any> {
    return this.http.put(`http://127.0.0.1:8000/api/employees/${id}`, data);
  }

  deleteEmployee(id: any): Observable<any> {
    return this.http.delete(`http://127.0.0.1:8000/api/employees/${id}`);
  }

}
