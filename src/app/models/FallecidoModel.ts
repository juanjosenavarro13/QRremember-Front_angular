export class FallecidoModel{

    constructor(
        public nombre:string,
        public apellidos:string,
        public fecha_nacimiento:Date,
        public fecha_fallecimiento:Date,
        public descripcion:string,
        public imagen:string,
        public clave:string,
        public id?:number,
        public user_id?:number,
    ){}


}