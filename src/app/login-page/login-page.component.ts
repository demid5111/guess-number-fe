import {Component} from '@angular/core';
import {Router} from '@angular/router';

import * as firebase from 'firebase/app';

import {AuthFirebaseService} from '../shared/services/auth-firebase.service';

@Component({
  selector: 'gn-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  user: firebase.User;

  constructor(public authService: AuthFirebaseService, private router: Router) {
    authService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  login() {
    return this.authService.loginWithGoogle()
      .then(() => {
        this.router.navigate(['join']);
      })
  }

  logout() {
    return this.authService.logout()
      .then(() => this.user = null);
  }
}
