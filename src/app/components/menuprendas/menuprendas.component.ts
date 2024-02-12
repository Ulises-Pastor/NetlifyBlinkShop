import { Component, AfterViewInit } from '@angular/core';
import { Prendas } from '../../../models/Prenda';
import { Tallas } from '../../../models/Tallas';
import { Inventario } from '../../../models/Inventario';
import { NuevoInventario } from '../../../models/Nuevoinventario';
import { PrendaService } from '../../services/prenda.service';
import { TallasService } from '../../services/tallas.service';
import { InventarioService } from '../../services/inventario.service';
import { BolsaService } from '../../services/bolsa.service';
import Swal from 'sweetalert2';
declare const M: any;

@Component({
  selector: 'app-menuprendas',
  templateUrl: './menuprendas.component.html',
  styleUrls: ['./menuprendas.component.css']
})
export class MenuprendasComponent implements AfterViewInit {

  idGuardado: any;
  prendas : Prendas [] = [];
  prenda : Prendas= new Prendas();
  tallas : Tallas[] = [];
  existencia : Inventario [] = [];
  prendabolsa : NuevoInventario = new NuevoInventario();
  pantalones = ["pantalonAcampanadoDama.jpg", "pantalonMezclillaCaballero.jpg"];
  blusas = ["blusaCruzadaVerde.jpg", "blusaBlanca.jpg"];
  faldas = ["faldaMezclillaDama.jpg", "faldaCuadros.png", "faldaCortaNegra.jpg"];
  playeras = ["playeraSlipknot.jpg"];
  sudaderas = ["sudaderaNegra.jpg"];
  vestidos = ["vestidoFloreadoRosa.jpg", "vestidoAzulCielo.jpg"];
  
  constructor(private prendasService : PrendaService, private tallasService : TallasService, private inventarioService : InventarioService, private bolsaService : BolsaService) {
    this.idGuardado = localStorage.getItem('id');
  }

  ngAfterViewInit(): void 
  {
    const modalElement1 = document.getElementById('modalAgregarABolsa');
    M.Modal.init(modalElement1);
    //const modalElement2 = document.getElementById('modalNuevaPrenda');
    //M.Modal.init(modalElement2);
    this.prendasService.list().subscribe((resPrendas: any) =>
    {
      this.prendas = resPrendas;  
      console.log(this.prendas);

      this.tallasService.list().subscribe((resTallas: any) =>
      {
        this.tallas=resTallas;
        console.log(resTallas);
      }, err => console.error(err));

    },
    err => console.error(err)
    );
  }

  verExistencia(clave : any){
    console.log(clave);
    this.prendabolsa = new NuevoInventario();
    this.inventarioService.verExistenciaPorPrenda(clave).subscribe((resExistencia: any) =>
    {
      this.prendabolsa.clave_prenda = clave;
      this.existencia = resExistencia;
      console.log(this.existencia);
    }, err => console.error(err));
  }

  agregarABolsa(){
    if(this.prendabolsa.clave_prenda != '' && this.prendabolsa.id_talla != 0 && this.prendabolsa.unidades != 0){
      console.log(this.prendabolsa);
      this.bolsaService.agregarABolsa(this.idGuardado, this.prendabolsa.clave_prenda, this.prendabolsa.id_talla, this.prendabolsa.unidades).subscribe((resBolsa: any) =>
      {
        this.prendasService.list().subscribe((resPrendas: any) =>
        {
          this.prendas = resPrendas;
        },err => console.error(err));
        Swal.fire({
          position: 'center',
          icon: 'success',
          text: 'Prenda gregada a la bolsa de compras.'
          })
      },
      err => console.error(err)
      );
    }else {
      console.log("Rellena todos los campos.")
    }
  }

  chunkArray(array: any[], size: number): any[][] {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
      array.slice(index * size, index * size + size)
    );
  }

  seleccionarImagenAlAzar(tipo : any): string {
    if(tipo == 4){//Pantalon
      // Obtener un índice aleatorio dentro del rango de la longitud del arreglo de imágenes
      //const indice = Math.floor(Math.random() * this.pantalones.length);
      // Devolver el nombre de la imagen en el índice aleatorio seleccionado
      return this.pantalones[0];
    }
    if(tipo == 5){//Blusas
      // Obtener un índice aleatorio dentro del rango de la longitud del arreglo de imágenes
      //const indice = Math.floor(Math.random() * this.blusas.length);
      // Devolver el nombre de la imagen en el índice aleatorio seleccionado
      return this.blusas[0];
    }
    if(tipo == 6){//Playeras
      // Obtener un índice aleatorio dentro del rango de la longitud del arreglo de imágenes
      //const indice = Math.floor(Math.random() * this.playeras.length);
      // Devolver el nombre de la imagen en el índice aleatorio seleccionado
      return this.playeras[0];
    }
    if(tipo == 7){//Sudaderas
      // Obtener un índice aleatorio dentro del rango de la longitud del arreglo de imágenes
      //const indice = Math.floor(Math.random() * this.sudaderas.length);
      // Devolver el nombre de la imagen en el índice aleatorio seleccionado
      return this.sudaderas[0];
    }
    if(tipo == 8){//Vestidos
      // Obtener un índice aleatorio dentro del rango de la longitud del arreglo de imágenes
      //const indice = Math.floor(Math.random() * this.vestidos.length);
      // Devolver el nombre de la imagen en el índice aleatorio seleccionado
      return this.vestidos[0];
    }
    return "porDefault.jpg";
  }

}
