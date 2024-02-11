import { Component, AfterViewInit } from '@angular/core';
import { Prendas } from '../../../models/Prenda';
import { Generos } from '../../../models/Generos';
import { Tallas } from '../../../models/Tallas';
import { Tipos } from '../../../models/Tipos';
import { PrendaService } from '../../services/prenda.service';
import { GenerosService } from '../../services/generos.service';
import { TallasService } from '../../services/tallas.service';
import { TiposService } from '../../services/tipos.service';
import Swal from 'sweetalert2';
declare const M: any;

@Component({
  selector: 'app-adminprendas',
  templateUrl: './prenda.component.html',
  styleUrls: ['./prenda.component.css']
})
export class PrendaComponent implements AfterViewInit {
  prendas : Prendas [] = [];
  prenda : Prendas= new Prendas();
  generos : Generos[] = [];
  tipos : Tipos[] = [];
  tallas : Tallas[] = [];

  constructor(private prendasService : PrendaService, private generosService : GenerosService, private tallasService : TallasService, private tiposService : TiposService) {
  }
  ngAfterViewInit(): void 
  {
    const modalElement1 = document.getElementById('modalModificarPrenda');
    M.Modal.init(modalElement1);
    const modalElement2 = document.getElementById('modalNuevaPrenda');
    M.Modal.init(modalElement2);
    this.prendasService.list().subscribe((resPrendas: any) =>
    {
      this.prendas = resPrendas;  
      console.log(this.prendas);
      this.generosService.list().subscribe((resGeneros: any) =>
      {
        this.generos=resGeneros;
        console.log(resGeneros);
      }, err => console.error(err)); 

      this.tiposService.list().subscribe((resTipos: any) =>
      {
        this.tipos=resTipos;
        console.log(resTipos);
      }, err => console.error(err));

      this.tallasService.list().subscribe((resTallas: any) =>
      {
        this.tallas=resTallas;
        console.log(resTallas);
      }, err => console.error(err));

    },
    err => console.error(err)
    );
  }

  limpiarPrenda(){
    this.prenda = new Prendas();
  }

  nuevaPrenda()
  {
    if(this.prenda.clave != '' && this.prenda.descripcion != '' && this.prenda.precio_unitario != 0){
      this.prendasService.crearPrenda(this.prenda.clave, this.prenda.descripcion, this.prenda.id_tipo, this.prenda.id_genero, this.prenda.precio_unitario).subscribe((resPrenda: any) =>
      {
        this.prendasService.list().subscribe((resPrendas: any) =>
        {
          this.prendas = resPrendas;
        },err => console.error(err));
        Swal.fire({
          position: 'center',
          icon: 'success',
          text: 'Prenda agregada.'
          })
      },
      err => console.error(err)
      );
    }else {
      console.log("Rellena todos los campos.")
    }
  }

  actualizarPrenda(clave :any)
  {
  console.log(clave);
    this.prendasService.listOne(clave).subscribe((resUsuario: any) =>
    {
      this.prenda = resUsuario;  
      console.log(this.prenda)
    },
    err => console.error(err)
    );
  }
  
  guardarActualizarPrenda()
  {
    this.prendasService.actualizarPrenda(this.prenda.clave, this.prenda.descripcion, this.prenda.id_tipo, this.prenda.id_genero, this.prenda.precio_unitario).subscribe(() => {
      this.prendasService.list().subscribe((resPrendas: any) =>
      {
        this.prendas = resPrendas;
      },err => console.error(err));
      Swal.fire({
        position: 'center',
        icon: 'success',
        text: 'Informacion actualizada.'
        })
    }, err => console.error(err));
  }

  eliminarPrenda(clave : any){
    console.log(clave);
    Swal.fire({
      title: "¿Desea eliminar esta prenda?",
      text: "Este cambio es permanente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, quiero eliminarla!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.prendasService.eliminarPrenda(clave).subscribe((resPrenda: any) =>
        {
          this.prendasService.list().subscribe((resPrendas: any) =>
          {
            this.prendas = resPrendas;  
            console.log(this.prendas);
          },
          err => console.error(err)
          );
        },
        err => console.error(err)
        );
        Swal.fire({
          title: "Eliminada!",
          text: "La prenda ha sido eliminada.",
          icon: "success"
        });
      }
    });
  }
}
