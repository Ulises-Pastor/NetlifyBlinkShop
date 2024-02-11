export class NuevoUsuario{
    id: number;
    nombre : string;
    correo: string;
    contrasena: string;
    rol: number;

    constructor() {
        this.id = 0;
        this.nombre = '';
        this.correo = '';
        this.contrasena = '';
        this.rol = 4;
    }
}