import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgreementServiceService {

  constructor(private http: HttpClient) { }

  getAllAgreements():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/preliminary_agreements/')
  }

  creareAgreement(data:any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/preliminary_agreements/', data);
  }

  getAllOrganizations(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/organizations/')
  }

  getEmployeesByOrganization(organization:Number): Observable<any>{
    return this.http.get(`http://127.0.0.1:8000/api/employees_by_org?organization=${organization}`)
  }

  getAllCountries(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/countries/');
  }

  getAgreementO(id:number): Observable<any>{
    return this.http.get(`http://127.0.0.1:8000/api/preliminary_agreements/${id}`)
  }

  getAgreement(id:number): Promise<any>{
    return this.getAgreementO(id).toPromise();
  }

  getCitiesByCountry(country:any): Observable<any>{
    return this.http.get(`http://127.0.0.1:8000/api/cities?country=${country}`)
  }

  addVisitingCity(data:any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/cities/', data);
  }

  getVisitingCitiesByAgreement(agreenemt:number): Observable<any>{
    return this.http.get(`http://127.0.0.1:8000/api/visiting_cities?preliminary_agreement=${agreenemt}`)
  }
  
}
