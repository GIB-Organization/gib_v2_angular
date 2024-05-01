import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

const auth = () => {
  return inject(AuthService);
};

const router = () => {
  return inject(Router)
}

export const authGuard: CanActivateFn = (route, state) => {
  if (auth().isAuthenticated()) {
    return true
  }
  router().navigate(['/'])
  return false
};

export const guestGuard: CanActivateFn = (route, state) => {
  if (auth().isAuthenticated()) {
    return false
  }
  router().navigate(['/'])
  return true
};
