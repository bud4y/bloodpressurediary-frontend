import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';
import {User} from '../interfaces/user';
import {environment} from '../environments/environment.prod';
import {Values} from '../interfaces/values';
import {map, tap} from "rxjs/operators";
import {AuthenticationService} from "../authentication.service";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    saveData: any;

    constructor(private authenticationService: AuthenticationService, private http: HttpClient) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    checkCapital(control: AbstractControl): ValidationErrors | null {
        if (control.value && control.value.charAt(0)
            && control.value.charAt(0).toUpperCase() === control.value.charAt(0)) {
            return null;
        } else {
            return {capital: true};
        }
    }

    checkPassword(group: FormGroup): ValidationErrors | null {
        if (group.get('password').value === group.get('passwordConfirmation').value) {
            return null;
        } else {
            return {'passwords-not-match': true};
        }
    }

    addUser(user: User): Observable<any> {
        const u = {...user, isMale: user.isMale === 'true'};
        return this.http.post(environment.apiEndpoint + 'register', u, {withCredentials: true});
    }

    // sendData(value: Values): Observable<any> {
    //   return this.http.post(
    //       environment.apiEndpoint + 'measure_details',
    //       value,
    //       {withCredentials: true}
    //       );
    // }
    // public get userValue(): User {
    //   return this.userSubject.value;
    // }

    getAll() {
        return this.http.get<User[]>(`${environment.apiEndpoint}users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiEndpoint}users/${id}`);
    }

    // update(id, params) {
    //     return this.http.put(`${environment.apiEndpoint}users/${id}`, params)
    //         .pipe(map(x => {
    //             // update stored user if the logged in user updated their own record
    //             if (id === this.user.id) {
    //                 // update local storage
    //                 const user = {...this.user, ...params};
    //                 localStorage.setItem('user', JSON.stringify(user));
    //
    //                 // publish updated user to subscribers
    //                 this.userSubject.next(user);
    //             }
    //             return x;
    //         }));
   // }

    sendData(value: Values): Observable<any> {
        return this.http.post(environment.apiEndpoint + 'measure_details', value, {withCredentials: true}
        ).pipe(tap(response => {
            // TODO elmenteni
            this.saveData = response;
        }));
    }

    // getReports(): Observable<reports>{
    //   return this.http.get(environment.apiEndpoint + 'measure_details', reports,
    //
    // }
}
