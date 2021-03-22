import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeeManagerModel } from 'src/app/models/employeeManager.model';

/**
 * employee service
 */
@Injectable({
  providedIn: 'root'
})

/**
 * employee service class
 */
export class GetEmployeeService {

  /**
   * constructor
   * @param http http client
   */
  constructor(private http: HttpClient) { }

  /**
   * Execute url but get data
   * @returns array to objects
   */
  getEmployee(): Observable<EmployeeManagerModel> {
    const url = 'https://run.mocky.io/v3/d5ddf1ff-a0e2-4a7e-bbcc-e832bef6a503';
    return this.http.get<EmployeeManagerModel>(url);
  }
}
