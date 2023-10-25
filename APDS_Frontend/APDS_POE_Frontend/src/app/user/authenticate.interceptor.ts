import { UserserviceService } from './userservice.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticateInterceptor implements HttpInterceptor {

  constructor(private authService:UserserviceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    const authToken = this.authService.getToken();
    const authRequest = request.clone({headers:request.headers.set("Authorization","Bearer " + authToken)});
    return next.handle(authRequest);
  }
}
