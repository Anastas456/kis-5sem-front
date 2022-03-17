import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  constructor(private http: HttpClient) { }

  getAllPayment(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/payments/');
  }

  createPayment(data: any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/payments/', data);
  }

  getContractsByOrganization(organization: number): Observable<any>{
    return this.http.get(`http://127.0.0.1:8000/api/filtered_contracts?organization=${organization}`)
  }


}
