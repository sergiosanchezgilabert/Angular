import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePersona }from '../models/reques-response';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor( private http: HttpClient ) { 
    console.log('personas services listo')
  }

  cargarPersonas(){
    const url='http://localhost:8080/api/find/getTodos';

    return this.http.get<Array<ResponsePersona>>(url);
  }
}
