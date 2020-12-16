import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { error, promise } from 'protractor';
import { Observable, Subject } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  mEmail = '';
  isLoginMode = true;
  isLoading = false;
  errorMsg: string = null;
  errorCode: string = null;
  constructor(private mAuthService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    let mAuthObservable;
    if (!form.valid) {
      return;
    }
    this.isLoading = true;
    if (this.isLoginMode) {
      mAuthObservable = this.mAuthService.logIn(
        form.value.email,
        form.value.password
      );
    } else {
      mAuthObservable = this.mAuthService.signUp(
        form.value.email,
        form.value.password
      );
    }
    mAuthObservable
      .then((res) => {
        console.log('You are Successfully sinup !', res);
        this.mAuthService.getToken().subscribe((token) => {
          const user = new User(res.user.email, res.user.uid, token);
          console.log(user);
          this.mAuthService.user.next(user);
          this.isLoading = false;
          this.router.navigate(['/laptops']);
        });
      })
      .catch((error) => {
        this.errorCode = error.code;
        this.errorMsg = error.message;
        this.isLoading = false;
      });

    form.reset;
  }
}
