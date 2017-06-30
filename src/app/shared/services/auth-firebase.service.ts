import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {Observable} from 'rxjs/Observable';

import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthFirebaseService {
  isAuthorized: boolean;
  redirectUrl: string;
  public user$: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.isAuthorized = false;
    this.user$ = afAuth.authState;

    this.user$.subscribe((auth) => {
      this.isAuthorized = !!auth;
    });
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((auth) => {
        this.isAuthorized = !!auth;
        if (this.redirectUrl) {
          this.router.navigateByUrl(this.redirectUrl);
        }
      });
  }

  logout(): firebase.Promise<any> {
    return this.afAuth.auth.signOut()
      .then(() => this.isAuthorized = false);
  }

  setRedirectUrl(url) {
    this.redirectUrl = url;
  }

  isLoggedIn() {
    return this.isAuthorized;
  }
}
