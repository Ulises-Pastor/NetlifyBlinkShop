import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrendaService {
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(`${environment.API_URI}/prendas/mostrarPrendas`);
  }

  listOne(clave : any) {
    return this.http.get(`${environment.API_URI}/prendas/verPrenda/${clave}`);
  }

  crearPrenda(clave : any, descripcion : any, id_tipo : any, id_genero : any, precio_unitario : any){ 
    return this.http.post(`${environment.API_URI}/prendas/nuevaPrenda/`, {"clave": clave, "descripcion": descripcion, "id_tipo": id_tipo, "id_genero": id_genero, "precio_unitario" : precio_unitario});
  }
  
  eliminarPrenda(clave : any){ 
    return this.http.delete(`${environment.API_URI}/prendas/eliminarPrenda/${clave}`);
  }
}
