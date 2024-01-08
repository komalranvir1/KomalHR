import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  paginatedData$!: Observable<any>;

  currentPage = 0;
  pageSize = 10; // Number of items per page
  totalItems: number = 0;
  employees = [];
  empList: any[] = [];
  data: any[] = [];
  employee:any;
  totalSalary: number = 0;
  totalEmployee: number = 0;
  Math: any;
  empDetail: any;
  employeeId: any;
  constructor(private employeeServce: EmployeeService, private activated: ActivatedRoute,private router: Router) {

  }
  ngOnInit(): void {
    this.getAllEmployee();
  
    // this.update();
  }

  getAllEmployee() {
    this.employeeServce.getAllEmployee(this.currentPage, this.pageSize).subscribe((res: any) => {
      console.log(res);
      this.empList = res.content;
      for (const employee of this.empList) {
        this.totalSalary += employee.salary;
        this.totalEmployee += employee.employeeId;
      }
      this.totalItems = res.totalPages;

    });
  }

  onPageChange(currentPage: any) {
    this.currentPage++;
    this.getAllEmployee();
  }
 
    update(employeeId:any) {
      console.log(employeeId);
      this.router.navigateByUrl('/admin/employee/' + employeeId);
  
    }
   

  delete(empId: any) {
    empId = this.empList[0].employeeId;
    console.log(empId);

    this.employeeServce.deleteEmployee(empId).subscribe((res: any) => {
      console.log(res);
      this.getAllEmployee();
    }, (err: any) => {
      console.log(err);
    });

  }

  addEmployee() {
    this.router.navigateByUrl('admin/employee')
  }

  editEmployee(id: any) {

  }





}



