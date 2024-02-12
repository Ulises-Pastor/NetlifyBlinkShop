import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(`${environment.API_URI}/existencias/mostrarExistencias`);
  }

  verExistenciaPorPrenda(clave : any){
    return this.http.get(`${environment.API_URI}/existencias/mostrarExistenciasPorPrenda/${clave}`);
  }

  listOne(clave : any) {//Pendiente
    return this.http.get(`${environment.API_URI}/prendas/verPrenda/${clave}`);
  }

  actualizarExistencia(clave : any, id_talla : any, unidades : any){
    return this.http.put(`${environment.API_URI}/existencias/actualizarExistencia/${clave}/${id_talla}`, {"clave_prenda": clave, "id_talla": id_talla, "unidades": unidades});
  }

  crearExistencia(clave : any, id_talla : any, unidades : any){ 
    return this.http.post(`${environment.API_URI}/existencias/nuevaExistencia/`, {"clave_prenda": clave, "id_talla": id_talla, "unidades": unidades});
  }
  
  eliminarExistencia(clave : any, id_talla : any){ 
    return this.http.delete(`${environment.API_URI}/existencias/eliminarExistencia/${clave}/${id_talla}`);
  }
}