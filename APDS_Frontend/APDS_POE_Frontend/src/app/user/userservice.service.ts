import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private apiUrl = 'https://localhost:3000/api/users';


  private token!: string;

  constructor(private http: HttpClient,private router: Router) { }

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
        this.token = token;
        // Navigate to 'getTask' route after successful login
      this.router.navigate(['/getTask']);
      })
  }

  getToken(){
    return this.token
  }
}
