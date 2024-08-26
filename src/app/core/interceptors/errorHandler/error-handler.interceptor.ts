import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorHandlerStrategy } from '../../classes/ErrorHandling';
import { inject } from '@angular/core';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const errorHandlerStartegy = inject(ErrorHandlerStrategy)
  const errorHandler = (err:any)=>{
     errorHandlerStartegy.createErrorInstance(err)
     return errorHandlerStartegy.errorInstance;
  }
  return next(req).pipe(catchError((err: any) => {
    errorHandler(err).handleErrorResponse(err);
    return throwError(() => err);
  }));
};
