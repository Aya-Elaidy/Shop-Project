import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private tokenKey:string='token';
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(environment.loginUrl, { username, password }).pipe(
      tap(
        (res:any)=>{
          localStorage.setItem(this.tokenKey,res.accessToken)
        }));
  }
   
  isLoggedIN():boolean{
    return !!localStorage.getItem(this.tokenKey);

  }

  logout(){
    localStorage.removeItem(this.tokenKey);
  }



}

