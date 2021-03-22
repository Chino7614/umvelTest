import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChartModel } from 'src/app/models/chart.model';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor(private http: HttpClient) {}
  getChart(): Observable<ChartModel> {
    const url = 'https://run.mocky.io/v3/15517ca5-7e07-4ebc-bf63-5b033ec4e16a';
    return this.http.get<ChartModel>(url);
  }
}
