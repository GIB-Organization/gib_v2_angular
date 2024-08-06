import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthStoreQuery } from '../../../store/authStore/auth-store.query';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authStoreQuery: AuthStoreQuery) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authStoreQuery.isAuthenticated) {
      return true;
    }
    this.router.createUrlTree(['/']);
    return false;
  }
}
