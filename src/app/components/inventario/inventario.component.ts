import { Component, AfterViewInit } from '@angular/core';
import { Inventario } from '../../../models/Inventario';
import { NuevoInventario } from '../../../models/Nuevoinventario';
import { Prendas } from '../../../models/Prenda';
import { Tallas } from '../../../models/Tallas';
import { InventarioService } from '../../services/inventario.service';
import { PrendaService } from '../../services/prenda.service';
import { TallasService } from '../../services/tallas.service';
import Swal from 'sweetalert2';
declare const M: any;

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements AfterViewInit {
  inventario : Inventario = new Inventario();
  nuevoinventario : NuevoInventario = new NuevoInventario();
  inventarios : Inventario [] = [];
  prendas : Prendas [] = [];
  tallas : Tallas[] = [];
  unidades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private inventarioService : InventarioService, private prendasService : PrendaService, private tallasService : TallasService) { }

  ngAfterViewInit(): void {
    const modalElement1 = document.getElementById('modalModificarPrenda');
    M.Modal.init(modalElement1);
    const modalElement2 = document.getElementById('modalNuevoInventario');
    M.Modal.init(modalElement2);
    this.prendasService.list().subscribe((resPrendas: any) =>
    {
      this.prendas = resPrendas;  
      console.log(this.prendas);

      this.tallasService.list().subscribe((resTallas: any) =>
      {
        this.tallas=resTallas;
        console.log(resTallas);
      }, err => console.error(err));

      this.inventarioService.list().subscribe((resInventarios : any) =>
      {
        this.inventarios = resInventarios;
        console.log(resInventarios);
      }, err => console.error(err));

    },
    err => console.error(err)
    );
  }

  limpiarInventario(){
    this.nuevoinventario = new NuevoInventario();
  }

  nuevoInventario()
  {
    if(this.nuevoinventario.clave_prenda != '' && this.nuevoinventario.id_talla!= 0 && this.nuevoinventario.unidades != 0){
      this.inventarioService.crearExistencia(this.nuevoinventario.clave_prenda, this.nuevoinventario.id_talla, this.nuevoinventario.unidades).subscribe((resInventario: any) =>
      {
        this.inventarioService.list().subscribe((resInventarios: any) =>
        {
          this.inventarios = resInventarios;
        },err => console.error(err));
        Swal.fire({
          position: 'center',
          icon: 'success',
          text: 'Unidades agregadas.'
          })
      },
      err => console.error(err)
      );
    }else {
      console.log("Rellena todos los campos.")
    }
  }

  actualizarInventario(clave : any){

  }

  guardarActualizarInventario(){

  }

  eliminarInventario(clave : any, talla : any){
    console.log(clave);
    Swal.fire({
      title: "¿Desea eliminar esta existencia del inventario?",
      text: "Este cambio es permanente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, quiero eliminarla!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.inventarioService.eliminarExistencia(clave, talla).subscribe((resPrenda: any) =>
        {
          this.inventarioService.list().subscribe((resInventarios: any) =>
          {
            this.inventarios = resInventarios;  
            console.log(this.inventarios);
          },
          err => console.error(err)
          );
        },
        err => console.error(err)
        );
        Swal.fire({
          title: "Eliminada!",
          text: "La existencia ha sido eliminada.",
          icon: "success"
        });
      }
    });
  }

}
