import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeManageComponent } from './employee-manage/employee-manage.component';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ChartComponent } from './chart/chart.component';



@NgModule({
  declarations: [EmployeeManageComponent, ChartComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [EmployeeManageComponent]
})
export class ComponentsModule { }
