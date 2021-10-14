export class UserModel{

    constructor(
        public id:number,
        public username:string,
        public email:string,
        public role:string,
        public active:boolean
    ){}


}