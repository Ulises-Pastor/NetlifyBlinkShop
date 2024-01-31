import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(`${environment.API_URI}/usuarios/mostrarUsuarios`);
  }

  listOne(id : any) {
    return this.http.get(`${environment.API_URI}/usuarios/verUsuario/${id}`);
  }

  existe(correo : any, password : any){ 
    return this.http.post(`${environment.API_URI}/usuarios/iniciarSesion/`, {"correo":correo, "contrasena":password});
  }

  crearUsuario(nombre : any, correo : any, password : any, rol : any){ 
    return this.http.post(`${environment.API_URI}/usuarios/nuevoUsuario/`, {"nombre": nombre, "correo":correo, "contrasena":password, "rol":rol});
  }

  eliminarUsuario(id : any){ 
    return this.http.delete(`${environment.API_URI}/usuarios/eliminarUsuario/${id}`);
  }

  actualizarUsuario(id : any, nombre : any, correo : any, password : any, rol : any){
    return this.http.put(`${environment.API_URI}/usuarios/actualizarUsuario/${id}`, {"nombre": nombre, "correo":correo, "contrasena":password, "rol":rol});
  }
}