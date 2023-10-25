import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private apiUrl = 'https://localhost:3000/api/users';


  private token!: string;

  constructor(private http: HttpClient) { }

  signup_service(
    user:{
    name:string,
    surname:string,
    emailAddress:string,
    username:string,
    password:string}
  ){
    this.http.post(this.apiUrl+'/signup',user).subscribe( response => {
      console.log(response);
    })
  }

  login_service(loginUser:{
     username:string,
    password:string}){
      this.http.post<{token:string}>(this.apiUrl+'/login',loginUser).subscribe(response => {
        const token = response.token;
        console.log(token);
        this.token = token;
      })
  }

  getToken(){
    console.log(this.token);
    return this.token
  }
}
