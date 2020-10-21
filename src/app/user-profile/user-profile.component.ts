import {Component,  Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {User} from '../../interfaces/user';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  form: FormGroup;

  @Input()
  inputUser: User;

  constructor(private userService: UserService) {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      firstname: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      lastname: new FormControl('', [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.min(8), Validators.max(40),]),
      passwordConfirmation: new FormControl(null, [Validators.required, Validators.min(8), Validators.max(40)]),
      birthDate: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      isMale: new FormControl('', Validators.required),
      weight: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(999)]),
      height: new FormControl(null, [Validators.required, Validators.min(120), Validators.max(250)]),

    }, [userService.checkPassword]);
  }

  ngOnInit(): void {
  }


  submitForm() {
    const u: User = {
      birthDate: this.form.get('birthDate').value,
      username: this.form.get('username').value,
      lastname: this.form.get('lastname').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value,
      passwordConfirmation: this.form.get('passwordConfirmation').value,
      height: this.form.get('height').value,
      weight: this.form.get('weight').value,
      firstname: this.form.get('firstname').value,
      isMale: this.form.get('isMale').value,
    };
    this.userService.addUser(u).subscribe(response => {

    });
  }
}

