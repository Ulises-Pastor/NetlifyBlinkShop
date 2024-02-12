export class BolsaElemento{
    Prenda : string;
    clave_prenda : string;
    Talla: string;
    id_talla: number;
    unidades: number;
    precio_unitario: number;
    precio_total: number;

    constructor() {
        this.Prenda = '';
        this.clave_prenda = '';
        this.Talla= '';
        this.id_talla= 0;
        this.unidades= 0;
        this.precio_unitario= 0;
        this.precio_total= 0;
    }
}