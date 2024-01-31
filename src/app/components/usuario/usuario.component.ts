import { Component, AfterViewInit } from '@angular/core';
import { Usuario } from '../../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
declare const M: any;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements AfterViewInit {
  usuarios : Usuario [] = [];
  usuario : Usuario= new Usuario();
  constructor(private usuarioService : UsuarioService) { }

  ngAfterViewInit(): void {
    const modalElement1 = document.getElementById('modalModificarUsuario');
    M.Modal.init(modalElement1);
    this.usuarioService.list().subscribe((resUsuarios: any) =>
    {
      this.usuarios = resUsuarios;  
      console.log(this.usuarios);
    },
    err => console.error(err)
    );
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
        text: 'Plan Actualizado'
        })
    }, err => console.error(err));
  }
}