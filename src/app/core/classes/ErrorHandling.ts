import { AuthApiService } from './../../services/api/authApi/auth-api.service';
import { HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable, Injector } from "@angular/core";
import { ToasterService } from "../../services/toaster/toaster.service";
import { AuthStoreService } from "../../store/authStore/auth-store.service";
import { ErrorCodes } from '../enums';

interface IErrorHandlingStrategy{
    handleErrorResponse(error: HttpErrorResponse): void;
}

@Injectable({providedIn:'root'})
export class ErrorHandlerStrategy{
    injector = inject(Injector)
    errorInstance!:IErrorHandlingStrategy;
    createErrorInstance(error:HttpErrorResponse){
        switch (error.status) {
            case ErrorCodes.unauthorized: // return to 401
                this.errorInstance = this.injector.get(UnAuthorizedErrorResponse)
                break;
            default:
                // this.errorInstance = this.injector.get(NotFoundErrorResponse)
                break;
        }
    }
}

@Injectable({providedIn:'root'})
export class UnAuthorizedErrorResponse implements IErrorHandlingStrategy{
    private toaster = inject(ToasterService);
    private authStoreService = inject(AuthStoreService);
    private authApiService = inject(AuthApiService);
    handleErrorResponse(error: HttpErrorResponse): void {
        if(error.url?.includes(this.authApiService.refreshPath)){
            this.toaster.addError('httpErrors.401');
            this.authStoreService.logout();
        }
    }
}

@Injectable({providedIn:'root'})
export class NotFoundErrorResponse implements IErrorHandlingStrategy{
    private toaster = inject(ToasterService);
    handleErrorResponse(error: HttpErrorResponse): void {
        // this.toaster.addError('Not Found');
    }
}