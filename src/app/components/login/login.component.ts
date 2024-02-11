import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/Usuario';
import { NuevoUsuario } from '../../../models/Nuevousuario';
import { Roles } from '../../../models/Roles';
import { UsuarioService } from '../../services/usuario.service';
import { RolesService } from '../../services/roles.service';
import Swal from 'sweetalert2';
declare const M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario : Usuario = new Usuario() ;
  nuevousuario : NuevoUsuario = new NuevoUsuario();
  validarContrasena = '';
  roles : Roles[] = []
  constructor(private usuarioService : UsuarioService, private rolesService : RolesService, private router: Router){
  }

  ngAfterViewInit(): void {
    const modalElement2 = document.getElementById('modalNuevoUsuario');
    M.Modal.init(modalElement2);
    this.rolesService.list().subscribe((resRoles: any) =>
    {
      this.roles=resRoles
      console.log(resRoles)
    }, err => console.error(err)); 
  }

  logueo()
  {
    this.usuarioService.existe(this.usuario.correo, this.usuario.contrasena).subscribe((resusuario: any) =>
    {
      if(resusuario.rol != -1)  //Compara si la consulta devuelve un json {rol : -1}
      {
        console.log(resusuario)
        localStorage.setItem('correo', resusuario[0].correo);
        localStorage.setItem('id_Rol', resusuario[0].rol);
        if(resusuario[0].rol == 3){ //Compara si la consulta devuelve un arreglo [{correo : "xyz@gmail.com", rol : 1|2}]
          this.router.navigateByUrl('/home/usuario', resusuario[0].rol);    //Modo edicion
        } else{
          this.router.navigateByUrl('/principal/prenda');   //Modo cliente
        }
      } else{
        console.log("Error, usuario o contrasena no valida");
      }
    },
    err => console.error(err)
    );
  }

  nuevoUsuario()
  {
    if(this.nuevousuario.nombre != '' && this.nuevousuario.correo != '' && this.nuevousuario.contrasena != '' && this.validarContrasena != ''){
      if(this.nuevousuario.contrasena == this.validarContrasena){
        this.usuarioService.crearUsuario(this.nuevousuario.nombre, this.nuevousuario.correo, this.nuevousuario.contrasena, 4).subscribe((resusuario: any) =>
        {
          Swal.fire({
            position: 'center',
            icon: 'success',
            text: 'Bienvenido a Blink Shop!'
            })
            this.router.navigateByUrl('/principal/prenda');   //Modo cliente
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

  limpiarUsuario(){
    this.nuevousuario = new NuevoUsuario();
    this.validarContrasena = '';
  }
}
