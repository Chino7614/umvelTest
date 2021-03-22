import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetEmployeeService {

  constructor() { }

  getEmployee(): Observable<any> {
    return of('https://run.mocky.io/v3/d5ddf1ff-a0e2-4a7e-bbcc-e832bef6a503');
  }
}
