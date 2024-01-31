export class Prendas{
    clave: string;
    descripcion : string;
    id_tipo: number;
    id_genero: number;
    precio_unitario: number;

    constructor() {
        this.clave = 'blu-001';
        this.descripcion = 'Blusa con ribete de volantes y hombros descubiertos para dama';
        this.id_tipo = 1;
        this.id_genero = 1;
        this.precio_unitario = 126.89;
    }
}