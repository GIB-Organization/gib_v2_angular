import { HttpErrorResponse } from "@angular/common/http"

export interface IResponse<Response>{
    message?:string,
    result: Response
}
export interface IErrorResponse extends HttpErrorResponse{
    error:{
        status:number,
        message: string
    }
}