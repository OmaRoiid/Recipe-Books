import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { error, promise } from 'protractor';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
   myPromise = new Promise(function(myResolve, myReject) {
  myResolve(); // when successful
  myReject();  // when error
});
  mEmail = '';
  isLoginMode = true;
  isLoading=false;
  errorMsg:string=null;
  constructor(private mAuthService: AuthService) {}

  ngOnInit() {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
   onSubmit(form: NgForm) {
    console.log(form.value);
    if (!form.valid) {
      return;
    }
    this.isLoading=true
    if (this.isLoginMode) {
    } else {
      this.mAuthService.signUp(form.value.email, form.value.password)
        .then((res) => console.log('You are Successfully signed up!', res))
        .catch((error) =>  this.errorMsg = error.message );
      this.isLoading=false
    }
    form.reset;
  }
}
