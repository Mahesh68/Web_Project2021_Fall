import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticatorService } from '../services/authenticator.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authenticatorService: AuthenticatorService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (new RegExp('api').test(request.url)) {
      let token = <string>this.authenticatorService.getToken();

      const authReq = request.clone({
        setHeaders: {
          'x-access-token': token ? token : ""
        }
      });

      return next.handle(authReq);
    } else {
      return next.handle(request);
    }
  }
}
