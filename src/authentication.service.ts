import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {map} from "rxjs/operators";
import {User} from './interfaces/user';
import {environment} from './environments/environment';
import {LoginService} from './app/services/login.service';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, private loginService: LoginService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username, password) {
        const fd = new FormData();
        fd.append('username', username);
        fd.append('password', password);
        return this.http.post<any>(environment.apiEndpoint + "login", fd, {withCredentials: true})
            .pipe(map(user => {
                this.loginService.isLoggedIn.next(true);
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        this.loginService.isLoggedIn.next(false);
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
