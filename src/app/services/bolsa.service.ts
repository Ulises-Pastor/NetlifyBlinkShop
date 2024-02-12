import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BolsaService {

  constructor(private http: HttpClient) { }

  agregarABolsa(id_usuario : any, clave : any, id_talla : any, unidades : any){ 
    return this.http.post(`${environment.API_URI}/bolsasDeCompra/agregarPrenda/`, {"id_usuario": id_usuario, "clave_prenda": clave, "id_talla": id_talla, "unidades": unidades});
  }

  verBolsa(id : any){
    return this.http.get(`${environment.API_URI}/bolsasDeCompra/verBolsa/${id}`);
  }
}
