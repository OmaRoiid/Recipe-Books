import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { DataServiceStorage } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthflag = false;
  private userSub: Subscription;
  constructor(
    private mDataStorageService: DataServiceStorage,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthflag = !!user;
      console.log('userState', this.isAuthflag);
    });
  }

  SaveDataIntoFireBase() {
    this.mDataStorageService.storeLapTops().subscribe((res) => {
      if (res.status == 200) {
        alert('Your Data saved Succssefully');
      }
    });
  }
  onFetchLAptops() {
    this.mDataStorageService.fetchLaptops().subscribe();
    alert('You get last updated data');
  }
  onLogOut() {
    this.authService
      .logout()
      .then(function () {
        alert('Sign-out successful');
      })
      .catch(function (error) {
      });
       this.router.navigate(['/auth']);
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
