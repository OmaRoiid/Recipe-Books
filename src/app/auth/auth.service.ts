import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from "@angular/fire/auth";
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  resErrorMsg;
  constructor(
    private mHttpClient: HttpClient,
    private angularFireAuth: AngularFireAuth
  ) {}

   signUp(email, password){
   return this.angularFireAuth.createUserWithEmailAndPassword(email, password)
    
  }

  
}
