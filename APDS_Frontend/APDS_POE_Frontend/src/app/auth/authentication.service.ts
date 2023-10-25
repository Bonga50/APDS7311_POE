import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'https://localhost:3000/api/users';


  private token!: string;

  constructor(private http: HttpClient) { }

  signup_service(
    user:{
    name:{type: String, required: true},
    surname:{type: String , required: true},
    emailAddress:{type: String , required:true},
    username:{type: String, required: true},
    password:{type: String, required: true}}
  ){
    this.http.post(this.apiUrl+'/signup',user).subscribe( response => {
      console.log(response);
    })
  }

  login_service(loginUser:{
     username:{type: String, required: true},
    password:{type: String, required: true}}){
      this.http.post<{token:string}>(this.apiUrl+'/login',loginUser).subscribe(response => {
        const token = response.token;
        this.token = token;
      })
  }

  getToken(){
    return this.token
  }
}
