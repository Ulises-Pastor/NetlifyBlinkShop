import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = new Usuario() ;
  constructor(private usuarioService : UsuarioService , private router: Router){
  }

  logueo()
  {
    this.usuarioService.existe(this.usuario.correo, this.usuario.contrasena).subscribe((resusuario: any) =>
    {
      if(resusuario.rol != -1)  //Compara si la consulta devuelve un json {rol : -1}
      {
        if(resusuario[0].rol == 2){ //Compara si la consulta devuelve un arreglo [{correo : "xyz@gmail.com", rol : 1|2}]
          this.router.navigateByUrl('/home/usuario', resusuario[0].rol);    //Modo edicion
        } else{
          this.router.navigateByUrl('/home/prenda');   //Modo normal
        }
      } else{
        console.log("Error, usuario o contrasena no valida");
      }
    },
    err => console.error(err)
    );
  }
}
