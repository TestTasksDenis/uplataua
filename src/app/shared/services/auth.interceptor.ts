import { HttpRequest, HttpEvent, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const copiedAuthRequest = req.clone({
            // setHeaders: {
            //     Authorization: `Some cool token`
            // }
        });
        return next.handle(copiedAuthRequest);
    }
}
