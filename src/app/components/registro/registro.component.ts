import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuario = new Usuario() ;
  validarContrasena = '';
  constructor(private usuarioService : UsuarioService , private router: Router){
  }

  registro()
  {
    if(this.usuario.nombre != '' && this.usuario.correo != '' && this.usuario.contrasena != '' && this.validarContrasena != ''){
      if(this.usuario.contrasena == this.validarContrasena){
        this.usuarioService.crearUsuario(this.usuario.nombre, this.usuario.correo, this.usuario.contrasena, 1).subscribe((resusuario: any) =>
        {
          this.router.navigateByUrl('/home/prenda');
        },
        err => console.error(err)
        );
      } else{
        console.log("La contraseña no coincide.")
      }
    }else {
      console.log("Rellena todos los campos.")
    }
  }
}
