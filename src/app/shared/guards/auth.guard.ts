import {Injectable} from '@angular/core';

import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import {AuthFirebaseService} from '../services/auth-firebase.service';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin(state.url);
  }

  checkLogin(url) {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.authService.setRedirectUrl(url);

    this.router.navigateByUrl('login');
    return false;
  }

  constructor(private authService: AuthFirebaseService, private router: Router) {
  }

}
