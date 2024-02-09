import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../employee/service/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {

  employeeForm!: FormGroup;
  submitted = false;
  formData: any;
  emp: any;
  employeeId: any;
  empList: any;
  currentPage: number = 0;
  pageSize: number = 5;
  totalSalary: any;
  totalEmployee: any;
  totalItems: any;
  constructor(private employeeServce: EmployeeService, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      salary: ['', Validators.required],
      joinDate: ['', Validators.required],
      contactNo: ['', Validators.required],
      status: ['', Validators.required],
      password: ['', Validators.required],

    });
  }
  ngOnInit(): void {
    this.employeeId = this.activatedRoute.snapshot.params['id'];
    console.log(this.employeeId);
    if (this.employeeId) {
      this.getEmployeeById(this.employeeId)
    }
    this.onSubmit();

  }
  get f() { return this.employeeForm.controls; }


  onSubmit() {
    this.submitted = true;

    if (this.employeeForm.invalid) {
      return

    }
    if (this.employeeId) {
      this.updateEmployee();
    } else {
      this.saveEmployee();
    }

  }

  onReset() {
    this.submitted = false;
    this.employeeForm.reset();
  }
  cancel() {
    this.router.navigateByUrl('admin/employee-list')
  }

  getEmployeeById(id: any) {
    this.employeeServce.getEmployeeById(this.employeeId).subscribe((res: any) => {
      console.log(res);
      this.employeeForm.patchValue({
        id: res.id,
        name: res.name,
        email: res.email,
        salary: res.salary,
        join_date: res.date,
        contactNo: res.contactNo,
        status: res.status,
      })
    })
  }
  saveEmployee() {
    let EmployeeData = this.employeeForm.value;

    console.log(EmployeeData);
    // this.loder = true;
    this.employeeServce.addEmployee(EmployeeData).subscribe((res: any) => {
      console.log(res);

      this.onReset();
      this.router.navigateByUrl('admin/employee-list')

    })
  }


  updateEmployee() {
    let EmployeeData = this.employeeForm.value;
    this.employeeServce.updateEmployeeById(this.employeeId, EmployeeData).subscribe((res: any) => {
      console.log(res);
      this.onReset();
    })
    this.router.navigateByUrl('admin/employee-list')
  }
}

