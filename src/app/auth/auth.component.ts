import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  mEmail='';
  isLoginMode=true
  constructor() {

  }

  ngOnInit() {}

  onSwitchMode(){
      this.isLoginMode=!this.isLoginMode
  }
}
