export class Usuario{
    id: number;
    nombre : string;
    correo: string;
    contrasena: string;
    rol: number;

    constructor() {
        this.id = 0;
        this.nombre = '';
        this.correo = 'ulisesme14@gmail.com';
        this.contrasena = 'Qwerty13579';
        this.rol = 0;
    }
}