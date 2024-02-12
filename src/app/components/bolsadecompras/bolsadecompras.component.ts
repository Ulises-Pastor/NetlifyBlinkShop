import { Component, AfterViewInit } from '@angular/core';
import { BolsaService } from '../../services/bolsa.service';
import { BolsaElemento } from '../../../models/BolsaElemento';
import Swal from 'sweetalert2';
declare const M: any;

@Component({
  selector: 'app-bolsadecompras',
  templateUrl: './bolsadecompras.component.html',
  styleUrls: ['./bolsadecompras.component.css']
})
export class BolsadecomprasComponent implements AfterViewInit {

  idGuardado: any;
  bolsa : BolsaElemento [] = [];
  
  constructor(private bolsaService : BolsaService) {
    this.idGuardado = localStorage.getItem('id');
  }

  ngAfterViewInit(): void {
    //const modalElement1 = document.getElementById('modalModificarPrenda');
    //M.Modal.init(modalElement1);
    //const modalElement2 = document.getElementById('modalNuevaPrenda');
    //M.Modal.init(modalElement2);

    this.bolsaService.verBolsa(this.idGuardado).subscribe((resBolsa: any) =>
    {
      if(resBolsa.mensaje == "Bolsa de Compra vacía"){
        console.log("Sin elementos en la bolsa.");
      }else{
        this.bolsa = resBolsa;  
        console.log(this.bolsa);
      }
    },
    err => console.error(err)
    );
  }

}
