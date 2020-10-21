import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: BehaviorSubject<boolean>;
  public isLoggedIn$;


  constructor(private http: HttpClient) {
    this.isLoggedIn = new BehaviorSubject<boolean>(false);
    this.isLoggedIn$ = this.isLoggedIn.asObservable();
    this.http.get(environment.apiEndpoint + 'login_user', { withCredentials: true })
        .subscribe(() => {
          this.isLoggedIn.next(true);
        }, () => {
            this.isLoggedIn.next(false);
        });
  }

}
