import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../employee/service/employee.service';
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
  empList: any;
  data: any[] = [];
  employee: any;
  totalSalary: number = 0;
  totalEmployee: number = 0;
  Math: any;
  empDetail: any;
  employeeId: any;


  // new properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  previousKeyword: string = '';
  paginationArray: any = []
  firstPageNumber = 0;
  lastPageNumber = 0;
  firstPageStatus: boolean = true;
  lastPageStatus: boolean = true;
  previousStatus: boolean = true;
  nextStatus: boolean = true;
  constructor(private employeeServce: EmployeeService,private activatedRoute: ActivatedRoute, private activated: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.employeeServce.getAllEmployee(this.currentPage, this.pageSize).subscribe((res: any) => {
      console.log(res);
      this.empList = res.content;
    });


  }

  onPageChange(currentPage: any) {
    this.currentPage++;
    this.getAllEmployee();
  }

  update(employeeId: any) {
    console.log(employeeId);
    this.router.navigateByUrl('/admin/employee/' + employeeId);

  }
  view(employeeId: any) {
    console.log(employeeId);
    
    this.router.navigateByUrl('/admin/employee-detail/' + employeeId )
    
  }

  delete(empId: any) {
    empId = this.empList[0].id;
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



