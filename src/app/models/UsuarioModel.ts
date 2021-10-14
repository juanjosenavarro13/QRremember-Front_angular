export class UsuarioModel{

    constructor(
        public email:string,
        public id?:number,
        public username?:string,
        public role?:string,
        public active?:boolean,
        public password?:string
    ){}


}