import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of, Subject } from 'rxjs';
import { User } from './user.model';
import { switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  constructor(
    private mHttpClient: HttpClient,
    private angularFireAuth: AngularFireAuth
  ) {}

  signUp(email, password) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }
  logIn(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }
  getToken() {
    return this.angularFireAuth.idToken;
  }
  logout() {
    this.user.next(null)
   return this.angularFireAuth.signOut();
  }
}
