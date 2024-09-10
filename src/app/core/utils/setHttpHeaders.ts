import { HttpRequest } from "@angular/common/http";

export function setHttpHeaders(req: HttpRequest<any>, token: string|undefined) {
    const REQ = req.clone({
        setHeaders: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return REQ;
}