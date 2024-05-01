import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const newReq = req.clone({
    setHeaders: {
      'Content-Type':'',
      'Authorization': `Bearer ${auth.getToken()}`
    }
  })
  return next(newReq);
};
