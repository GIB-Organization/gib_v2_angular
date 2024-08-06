import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthStoreQuery } from '../../../store/authStore/auth-store.query';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authStoreQuery = inject(AuthStoreQuery);
  const newReq = req.clone({
    setHeaders: {
      'Content-Type':'application/json',
      'Authorization': `Bearer ${authStoreQuery.token?.accessToken}`
    }
  })
  return next(newReq);
};
