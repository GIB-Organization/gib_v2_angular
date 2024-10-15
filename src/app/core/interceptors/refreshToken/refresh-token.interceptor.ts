import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthApiService } from '../../../services/api/authApi/auth-api.service';
import { AuthStoreQuery } from '../../../store/authStore/auth-store.query';
import { ErrorCodes } from '../../enums';
import { ILoginResponse } from '../../../models/auth.interface';
import { setHttpHeaders } from '../../utils/setHttpHeaders';

export const refreshTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authApiService = inject(AuthApiService);
  const authStoreQuery = inject(AuthStoreQuery);
  return next(req).pipe(
    catchError((error) => {
      if (error.status === ErrorCodes.unauthorized && !error.url.includes(authApiService.refreshPath)) {
        return authApiService.refreshToken(authStoreQuery.token).pipe(
          switchMap((newAccessToken) => {
            const USER : ILoginResponse = {
              ...authStoreQuery.user,
              token: newAccessToken
            }
              authStoreQuery.setUser = USER
              return next(setHttpHeaders(req, newAccessToken?.accessToken));
          }),
          catchError((error) => {
            return throwError({
              ...error,
              status: ErrorCodes.unauthorized
            });
          })
        );
      }
      return throwError(error);
    })
  );
};
