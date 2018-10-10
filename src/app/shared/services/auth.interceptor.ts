import { HttpRequest, HttpEvent, HttpHandler, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const copiedAuthRequest = req.clone({
            // setHeaders: {
            //     Authorization: `Bareer token`
            // }
        });
        return next.handle(copiedAuthRequest).pipe(
          tap(
            event => (event instanceof HttpResponse) ? 'succeeded' : 'error',
            error => console.log(error)
          ),
          finalize(() => {
            // console.log(`${req.method} "${req.urlWithParams}"`);
          })
        );
    }
}
