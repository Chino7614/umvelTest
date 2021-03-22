import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeManageComponent } from './employee-manage/employee-manage.component';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [EmployeeManageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [EmployeeManageComponent]
})
export class ComponentsModule { }
