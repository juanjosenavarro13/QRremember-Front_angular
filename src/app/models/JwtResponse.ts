export class JwtRresponse {

  constructor(
    public access_token:string,
    public expires_in:string,
    public usuario:{
      id:number,
      nombre:string,
      email:string,
      updated_at:Date,
      created_at:Date
    }
  ){}

}
