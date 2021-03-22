import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeeManagerModel } from 'src/app/models/employeeManager.model';

@Injectable({
  providedIn: 'root'
})
export class GetEmployeeService {

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<EmployeeManagerModel> {
    const url = 'https://run.mocky.io/v3/d5ddf1ff-a0e2-4a7e-bbcc-e832bef6a503';
    return this.http.get<EmployeeManagerModel>(url);
  }
}
