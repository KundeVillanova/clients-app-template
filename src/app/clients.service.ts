import { Injectable } from '@angular/core';
import { Client } from './clients/client';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  apiUrl : string = environment.apiUrl+'/api/clients';

  constructor( private http : HttpClient ) {

  }

  save(client : Client) : Observable<Client>{
    return this.http.post<Client>(`${this.apiUrl}`, client)
  }
  update(client : Client) : Observable<any>{
    return this.http.put<Client>(`${this.apiUrl}/${client.id}`, client)
  }

  getClients() : Observable<Client[]>{
    return this.http.get<Client[]>(this.apiUrl);
  }

  getCLienteById(id :number) : Observable<Client>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deleteClientById(client : Client) : Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${client.id}`)
  }
}
