import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // show or hide icon in password input
  hide = true;

  // form to login
  loginForm: FormGroup;

  // obtain email to login form
  email: AbstractControl;

  // obtain password to login form
  password: AbstractControl;

  constructor(
    private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });

    this.email = this.loginForm.controls.email;
    this.password = this.loginForm.controls.password;
  }

  ngOnInit(): void {
  }

  // validate if login form is valid
  loggin() {
    if (this.loginForm.valid) {
      sessionStorage.setItem('information', JSON.stringify(this.loginForm.value));
      this.router.navigateByUrl('/home');
    }
  }

  // validate the two errors type of email input
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes de ingresar un correo electrónico';
    }

    return this.email.hasError('email') ? 'Correo electrónico invalido' : '';
  }
}
