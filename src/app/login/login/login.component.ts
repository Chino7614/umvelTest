import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * Login component decorator
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login class
 */
export class LoginComponent {

  /**
   * show or hide icon in password input
   */
  hide = true;

  /**
   * form to login
   */
  loginForm: FormGroup;

  /**
   * obtain email to login form
   */
  email: AbstractControl;

  /**
   * obtain password to login form
   */
  password: AbstractControl;

  /**
   * Home constructor
   * @param formBuilder create the form
   * @param router Navigate url home
   */
  constructor(
    private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });

    this.email = this.loginForm.controls.email;
    this.password = this.loginForm.controls.password;
  }
  /**
   * validate if login form is valid
   */
  loggin() {
    if (this.loginForm.valid) {
      sessionStorage.setItem('information', JSON.stringify(this.loginForm.value));
      this.router.navigateByUrl('/home');
    }
  }

  /**
   * validate the two errors type of email input
   * @returns the error
   */
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes de ingresar un correo electrónico';
    }

    return this.email.hasError('email') ? 'Correo electrónico invalido' : '';
  }
}
