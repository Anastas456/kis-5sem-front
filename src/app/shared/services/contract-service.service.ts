import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractServiceService {

  constructor(private http: HttpClient) { }

  getAllContracts():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/contracts/');
  }

  getTripMembersByContract(contract:number):Observable<any>{
    return this.http.get(`http://127.0.0.1:8000/api/trip_members?contract=${contract}`);
  }

  getRoutesByContract(contract:number):Observable<any>{
    return this.http.get(`http://127.0.0.1:8000/api/routes?contract=${contract}`);
  }

  createContract(data:any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/contracts/', data);
  }

  addTripMember(data:any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/add_trip_member/', data);
  }

  getContractO(id:number): Observable<any>{
    return this.http.get(`http://127.0.0.1:8000/api/contracts/${id}`)
  }

  getContract(id:number): Promise<any>{
    return this.getContractO(id).toPromise();
  }

  addRoute(data:any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/add_route/', data);
  }

  getAllHotelReservation():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/hotel_reservation_list/');
  }

}
