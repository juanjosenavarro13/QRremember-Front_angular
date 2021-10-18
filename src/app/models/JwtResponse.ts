export class JwtRresponse {

  constructor(
    public access_token:string,
    public expires_in:string,
    public dataUser:{
      id:number,
      name:string,
      email:string,
      accessToken:string,
      expiresIn:string
    }
  ){}

}
