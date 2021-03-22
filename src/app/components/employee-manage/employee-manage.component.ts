import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeManagerArrayModel, EmployeeManagerModel } from 'src/app/models/employeeManager.model';
import { GetEmployeeService } from 'src/app/services/get-employee/get-employee.service';

@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html',
  styleUrls: ['./employee-manage.component.scss']
})
export class EmployeeManageComponent implements OnInit {

   dataSource = new MatTableDataSource<EmployeeManagerArrayModel>();

  displayedColumns: string[] = ['image', 'email', 'first_name', 'last_name', 'gender'];

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  constructor(private getEmployeeService: GetEmployeeService) {
  }

  ngOnInit(): void {
    this.getEmployeeService.getEmployee().forEach((response: EmployeeManagerModel) => {
      this.dataSource = new MatTableDataSource(response.users);
      this.dataSource.paginator = this.paginator;
    });
  }

}
