import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent  implements OnInit{
  ngOnInit(): void {

  }

  constructor(private authService:UserserviceService) {

  }

  user={name:'',
    surname:'',
    emailAddress:'',
    username:'',
    password:''
  }

  onSignup(signUpForm:NgForm){
    if(signUpForm.invalid){
      alert('invalid input');
      return;
    }

    this.authService.signup_service(this.user);
  }

}
