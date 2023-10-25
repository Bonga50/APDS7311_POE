import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit{
  /**
   *
   */
  constructor(private authService:UserserviceService) {

  }
  ngOnInit(): void {

  }

  user={
  username:'',
  password:''
}

onLogin(loginForm:NgForm){
  if(loginForm.invalid){
    alert('invalid input');
    return;
  }
  this.authService.login_service(this.user);
}
}
