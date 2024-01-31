import { Component, AfterViewInit } from '@angular/core';
import { Prendas } from '../../../models/Prenda';
import { PrendaService } from '../../services/prenda.service';
declare const M: any;

@Component({
  selector: 'app-adminprendas',
  templateUrl: './prenda.component.html',
  styleUrls: ['./prenda.component.css']
})
export class PrendaComponent implements AfterViewInit {
  prendas : Prendas [] = [];
  prenda : Prendas= new Prendas();
  constructor(private prendasService : PrendaService) {
  }
  ngAfterViewInit(): void 
  {
    const modalElement1 = document.getElementById('modalModificarPrenda');
    M.Modal.init(modalElement1);

    this.prendasService.list().subscribe((resPrendas: any) =>
    {
      this.prendas = resPrendas;  
      console.log(this.prendas);
    },
    err => console.error(err)
    );
  }

  actualizarPrenda(id :any)
  {
  console.log(id);
    this.prendasService.listOne(id).subscribe((resUsuario: any) =>
    {
      this.prenda = resUsuario;  
      console.log(this.prenda)
    },
    err => console.error(err)
    );
  }
  
  guardarActualizarPrenda()
  {
    console.log("Cerrando");
    console.log(this.prenda)
  }

  eliminarPrenda(id : any){
    console.log(id);
    this.prendasService.eliminarPrenda(id).subscribe((resUsuario: any) =>
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
  }
}
