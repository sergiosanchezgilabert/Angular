import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePersona } from '../models/reques-response';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) {
    console.log('personas services listo')
  }

  cargarPersonas() {
    const url='http://localhost:3000/personas';

    //const url = 'http://localhost:8080/api/find/getTodos';

    return this.http.get<Array<ResponsePersona>>(url);
  }

  getPersona(id: string | null) {
   // const url = 'http://localhost:8080/api/find//getID/' + id;

    const url = 'http://localhost:3000/personas/' + id;

    return this.http.get<ResponsePersona>(url);
  }

  eliminarPersona(id: number) {
    //const url = 'http://localhost:8080/api/eliminator/' + id;
    const url = 'http://localhost:3000/personas/' + id;


    return this.http.delete(url);
  }

  aniadirPersona(unico: []) {
     //const url='http://localhost:8080/api/aniadirPersona';


     const url='http://localhost:3000/personas';

 
     return this.http.post(url,unico);

    // return this.http.post("http://localhost:3000/personas/",unico)
  }

  editarPersona(unico: [], id: number) {
    //const url = 'http://localhost:8080/api/actualizarPersona/' + id;

    const url = 'http://localhost:3000/personas/' + id;

    return this.http.put(url, unico);
  }
}
