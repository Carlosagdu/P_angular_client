import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  loginForm = this.formBuilder.group({
    email:'',
    password: '',
  });
  
  ngOnInit(): void {
  }

  onSubmit():void {
    console.log(this.loginForm.value);
  }

}
