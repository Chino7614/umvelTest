import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeManagerArrayModel, EmployeeManagerModel } from 'src/app/models/employeeManager.model';
import { GetEmployeeService } from 'src/app/services/get-employee/get-employee.service';

/**
 * Employee manage component
 */
@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html',
  styleUrls: ['./employee-manage.component.scss']
})

/**
 * Employee manage class
 */
export class EmployeeManageComponent implements OnInit {

  /**
   * MataTableDataSource passed EmployeeManagarArrayModel
   */
   dataSource = new MatTableDataSource<EmployeeManagerArrayModel>();

   /**
    * displayedColumns contains the headers name
    */
  displayedColumns: string[] = ['image', 'email', 'first_name', 'last_name', 'gender'];

  /**
   * access to DOM the paginator
   */
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
 
  /**
   * create variable with method service
   * @param getEmployeeService Employee service
   */
  constructor(private getEmployeeService: GetEmployeeService) {
  }

  /**
   * obtain data the employeeService and response will be pass to dataSource
   */
  ngOnInit(): void {
    this.getEmployeeService.getEmployee().forEach((response: EmployeeManagerModel) => {
      this.dataSource = new MatTableDataSource(response.users);
      this.dataSource.paginator = this.paginator;
    });
  }

}
