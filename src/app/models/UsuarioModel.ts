export class UsuarioModel{
    [x: string]: any;

    constructor(
        public email:string,
        public id?:number,
        public nombre?:string,
        public role?:string,
        public active?:boolean,
        public password?:string
    ){}


}