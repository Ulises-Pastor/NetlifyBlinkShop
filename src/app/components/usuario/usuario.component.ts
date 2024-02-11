import { Component, AfterViewInit } from '@angular/core';
import { Usuario } from '../../../models/Usuario';
import { NuevoUsuario } from '../../../models/Nuevousuario';
import { Roles } from '../../../models/Roles';
import { UsuarioService } from '../../services/usuario.service';
import { RolesService } from '../../services/roles.service';
import Swal from 'sweetalert2';
declare const M: any;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements AfterViewInit {
  usuarios : Usuario [] = [];
  usuario : Usuario = new Usuario();
  nuevousuario : NuevoUsuario = new NuevoUsuario();
  validarContrasena = '';
  roles : Roles[] = [];

  constructor(private usuarioService : UsuarioService, private rolesService : RolesService) { }

  ngAfterViewInit(): void {
    const modalElement1 = document.getElementById('modalModificarUsuario');
    M.Modal.init(modalElement1);
    const modalElement2 = document.getElementById('modalNuevoUsuario');
    M.Modal.init(modalElement2);
    this.usuarioService.list().subscribe((resUsuarios: any) =>
    {
      this.usuarios = resUsuarios;
      this.rolesService.list().subscribe((resRoles: any) =>
      {
        this.roles=resRoles;
        console.log(resRoles);
      }, err => console.error(err)); 
      console.log(this.usuarios);
    },
    err => console.error(err)
    );
  }

  nuevoUsuario()
  {
    if(this.nuevousuario.nombre != '' && this.nuevousuario.correo != '' && this.nuevousuario.contrasena != '' && this.validarContrasena != ''){
      if(this.nuevousuario.contrasena == this.validarContrasena){
        this.usuarioService.crearUsuario(this.nuevousuario.nombre, this.nuevousuario.correo, this.nuevousuario.contrasena, this.nuevousuario.rol).subscribe((resusuario: any) =>
        {
          this.usuarioService.list().subscribe((resUsuarios: any) =>
          {
            this.usuarios = resUsuarios;
          },err => console.error(err));
          Swal.fire({
            position: 'center',
            icon: 'success',
            text: 'Usuario Agregado.'
            })
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

  actualizarUsuario(id :any)
  {
    console.log(id);
    this.usuarioService.listOne(id).subscribe((resUsuario: any) =>
    {
      this.usuario = resUsuario;  
      console.log(this.usuario)
    },
    err => console.error(err)
    );
  }

  guardarActualizarUsuario()
  {
    this.usuarioService.actualizarUsuario(this.usuario.id, this.usuario.nombre, this.usuario.correo, this.usuario.contrasena, this.usuario.rol).subscribe(() => {
      this.usuarioService.list().subscribe((resUsuarios: any) =>
      {
        this.usuarios = resUsuarios;
      },err => console.error(err));
      Swal.fire({
        position: 'center',
        icon: 'success',
        text: 'Datos actualizados.'
        })
    }, err => console.error(err));
  }

  eliminarUsuario(id : any){
    console.log(id);
    Swal.fire({
      title: "¿Desea eliminar este usuario?",
      text: "Este cambio es permanente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, quiero eliminarlo!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.eliminarUsuario(id).subscribe((resUsuario: any) =>
        {
          this.usuarioService.list().subscribe((resUsuarios: any) =>
          {
            this.usuarios = resUsuarios;  
            console.log(this.usuarios);
          },
          err => console.error(err)
          );
        },
        err => console.error(err)
        );
        Swal.fire({
          title: "Eliminado!",
          text: "El usuario ha sido eliminado.",
          icon: "success"
        });
      }
    });
  }
}