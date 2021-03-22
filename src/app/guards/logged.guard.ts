import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

/**
 * Logged injectable
 */
@Injectable({
  providedIn: 'root',
})

/**
 * Logged guard class
 */
export class LoggedGuard implements CanActivate {

  /**
   * Constructor
   * @param router Router
   */
  constructor(private router: Router) {}

  /**
   * Validate if containg information in session Storage
   * @returns true or false
   */
  canActivate(): boolean {
    if (sessionStorage.getItem('information')) {
      return true;
    } else {
      this.router.navigateByUrl('login');
      return false;
    }
  }
}
