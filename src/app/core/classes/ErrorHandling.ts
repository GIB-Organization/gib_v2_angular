import { HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable, Injector } from "@angular/core";
import { ToasterService } from "../../services/toaster/toaster.service";
import { AuthStoreService } from "../../store/authStore/auth-store.service";

interface IErrorHandlingStrategy{
    handleErrorResponse(error: HttpErrorResponse): void;
}

@Injectable({providedIn:'root'})
export class ErrorHandlerStrategy{
    injector = inject(Injector)
    errorInstance!:IErrorHandlingStrategy;
    createErrorInstance(error:HttpErrorResponse){
        console.log(error)
        switch (error.status) {
            case 0: // return to 401
                this.errorInstance = this.injector.get(UnAuthorizedErrorResponse)
                break;
            default:
                this.errorInstance = this.injector.get(NotFoundErrorResponse)
                break;
        }
    }
}

@Injectable({providedIn:'root'})
class UnAuthorizedErrorResponse implements IErrorHandlingStrategy{
    toaster = inject(ToasterService);
    authStoreService = inject(AuthStoreService);
    handleErrorResponse(error: HttpErrorResponse): void {
        this.toaster.addError('Your session has expired. Please log in again.');
        this.authStoreService.logout();
    }
}

@Injectable({providedIn:'root'})
class NotFoundErrorResponse implements IErrorHandlingStrategy{
    toaster = inject(ToasterService);
    handleErrorResponse(error: HttpErrorResponse): void {
        this.toaster.addError('Not Found');
    }
}