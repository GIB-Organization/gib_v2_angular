import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStoreQuery } from '../../../store/authStore/auth-store.query';

const auth = () => {
  return inject(AuthStoreQuery);
};

const router = () => {
  return inject(Router)
}

export const authGuard: CanActivateFn = (route, state) => {
  if (auth().isAuthenticated) {
    return true
  }
  router().navigate(['/'])
  return false
};

export const guestGuard: CanActivateFn = (route, state) => {
  if (auth().isAuthenticated) {
    return false
  }
  router().navigate(['/'])
  return true
};
