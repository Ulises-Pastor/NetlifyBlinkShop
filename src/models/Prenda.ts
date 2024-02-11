export class Prendas{
    clave: string;
    descripcion : string;
    id_tipo: number;
    id_genero: number;
    precio_unitario: number;

    constructor() {
        this.clave = '';
        this.descripcion = '';
        this.id_tipo = 3;
        this.id_genero = 3;
        this.precio_unitario = 0;
    }
}