import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  private isLoggedIn: Subject<boolean>;
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.isLoggedIn = new Subject<boolean>();
    this.url = environment.accountUrl;
  }

  get IsLoggedIn() { return this.isLoggedIn.asObservable(); }

  getToken() {
    return sessionStorage.getItem('tk');
  }

  login(username: string, password: string) {
    return this.httpClient.post<any>(this.url, { username: username, password: password }).pipe(map(resObject => {
      if (resObject && resObject.token) {
        sessionStorage.setItem('tk', resObject.token);
        sessionStorage.setItem("role", resObject.role);
        this.isLoggedIn.next(true);
      }
    }),
      retry(3),
      catchError(this._handleError<any>('login', [])));
  }

  private _handleError<T>(operation = 'operation', result?: T) {
    return (err: HttpErrorResponse): Observable<T> => {
      console.log(`${operation} failed: ${err.message}`);
      console.log(err);
      return throwError(err.error.message);
    }
  }

  logout() {
    sessionStorage.removeItem('tk');
    sessionStorage.removeItem('role');
    this.isLoggedIn.next(false);
  }
}
