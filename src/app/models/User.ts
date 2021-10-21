export class User {

  constructor(
    public id:number,
    public nombre:string,
    public email:string,
    public password:string,
    public role:string,
    public active:boolean,
    public remember_token:string,
    public created_at:Date,
    public updated_at:Date
  ){}

}
