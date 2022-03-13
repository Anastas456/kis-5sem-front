import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsServiceService {

  constructor(private http: HttpClient) { }

  getAllClients():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/clients/')
  }

  getClientO(id: number): Observable<any> {
    return this.http.get(`http://127.0.0.1:8000/api/clients/${id}`);
  }

  getClient(id:number): Promise<any>{
    return this.getClientO(id).toPromise();
  }

  createClient(data: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/clients/', data);
  }

  updateClient(id: any, data: any): Observable<any> {
    return this.http.put(`http://127.0.0.1:8000/api/clients/${id}`, data);
  }

  deleteClient(id: any): Observable<any> {
    return this.http.delete(`http://127.0.0.1:8000/api/clients/${id}`);
  }



  getRusPasO(id: number): Observable<any> {
    return this.http.get(`http://127.0.0.1:8000/api/russian_passport?client=${id}`);
  }

  getRusPas(id:number): Promise<any>{
    return this.getRusPasO(id).toPromise();
  }

  updateRusPass(id: any, data: any): Observable<any> {
    return this.http.put(`http://127.0.0.1:8000/api/russian_passport/${id}`, data);
  }

  createRusPas(data: any): Observable<any> {
    return this.http.post(`http://127.0.0.1:8000/api/russian_passport`, data);
  }

}
