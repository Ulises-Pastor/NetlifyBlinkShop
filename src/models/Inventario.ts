export class Inventario{
    Clave: string;
    Prenda : string;
    Talla: string;
    id_talla: number;
    Unidades: number;

    constructor() {
        this.Clave = '';
        this.Prenda = '';
        this.Talla = '';
        this.id_talla = 4;
        this.Unidades = 0;
    }
}