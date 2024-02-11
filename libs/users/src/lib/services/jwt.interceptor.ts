import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalstorageService } from './localstorage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalstorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localStorageService.getToken();
    const isAPIUrl = req.url.startsWith("http://localhost:5000/api/v1");

    if (token && isAPIUrl) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req);
  }
}



// import { HttpInterceptorFn } from '@angular/common/http';
// import { LocalstorageService } from './localstorage.service';


// export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  
//   return next(req);

// };
