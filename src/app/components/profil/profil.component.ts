import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginmodalComponent} from '../../loginmodal/loginmodal.component';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../authentication.service";
import {AlertService} from "../../../alert.service";
import {UserService} from "../../user.service";
import {first} from "rxjs/operators";
import {User} from "../../../interfaces/user";

@Component({
    selector: 'app-profil',
    templateUrl: './profil.component.html',
    styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
    form: FormGroup;
    id: string;
    isAddMode: boolean;
    loading = false;
    submitted = false;

    @Output()
    submitUser: EventEmitter<User>;

    @Input()
        inputUser: User;


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AuthenticationService,
        private alertService: AlertService,
        private userService: UserService,
        private modalService: NgbModal
    ) {
        // this.id = this.form.get(this.userService.userValue.id);
        this.form = new FormGroup({
            username: new FormControl(),
            firstname: new FormControl(),
            lastname: new FormControl(),
            password: new FormControl(null, [Validators.required, Validators.min(8), Validators.max(40),]),
            passwordConfirmation: new FormControl(null, [Validators.required, Validators.min(8), Validators.max(40)]),
            birthDate: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.email, Validators.required]),
            isMale: new FormControl('', Validators.required),
            weight: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(999)]),
            height: new FormControl(null, [Validators.required, Validators.min(120), Validators.max(250)]),
        });
        //this.submitUser = new EventEmitter<User>();
    }

    ngOnInit() {

        // this.id = this.route.snapshot.params['id'];
        // this.isAddMode = !this.id;
        //
        // const passwordValidators = [Validators.minLength(6)];
        // if (this.isAddMode) {
        //     passwordValidators.push(Validators.required);
        // }

        this.userService.user.subscribe(user => {
            this.form.get('birthDate').setValue(user.birthDate);
            this.form.get('username').setValue(user.username);
            this.form.get('lastname').setValue(user.lastname);
            this.form.get('email').setValue(user.email);
            this.form.get('password').setValue(user.password);
            this.form.get('passwordConfirmation').setValue(user.passwordConfirmation);
            this.form.get('height').setValue(user.height);
            this.form.get('weight').setValue(user.weight);
            this.form.get('firstname').setValue(user.firstname);
            this.form.get('isMale').setValue(user.isMale);
        });

        // this.form = this.formBuilder.group({
        //     firstName: ['', Validators.required],
        //     lastName: ['', Validators.required],
        //     username: ['', Validators.required],
        //     password: ['']
        // });

        this.userService.getById(this.id)
            .pipe(first())
            .subscribe(x => {
                this.f.firstName.setValue(x.firstname);
                this.f.lastName.setValue(x.lastname);
                this.f.username.setValue(x.username);
            });
    }


    get f() {
        return this.form.controls;
    }

    onSubmit() {
       // this.updateUser();

    }

    createUser() {
        this.userService.addUser(this.form.value)
            .pipe(first())
            .subscribe(
                data => {
                    // this.alertService.success('User added successfully', SUCCESS);
                    this.router.navigate(['.', {relativeTo: this.route}]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    // updateUser() {
    //     this.userService.update(this.id, this.form.value)
    //         .pipe(first())
    //         .subscribe(
    //             data => {
    //                 // this.alertService.success('Update successful', { keepAfterRouteChange: true });
    //                 this.router.navigate(['..', {relativeTo: this.route}]);
    //             },
    //             error => {
    //                 this.alertService.error(error);
    //                 this.loading = false;
    //             });
    // }

    openModal() {
        this.modalService.open(LoginmodalComponent);
    }
}
