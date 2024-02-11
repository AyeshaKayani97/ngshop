import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LocalstorageService } from '../services/localstorage.service';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // apiURLUsers = environment.apiUrl + 'users';
  apiURLUsers = "http://localhost:5000/v1/users"

  constructor(
    private http: HttpClient,
    private token: LocalstorageService,
    private router:Router

    
    ) {
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>("http://localhost:5000/api/v1/users/login", { email, password });
  }

  logout(){
    this.token.removeToken();
    this.router.navigateByUrl('/login');
  }



  
  


}
