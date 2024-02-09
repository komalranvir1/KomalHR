import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrl: './employee-profile.component.css'
})
export class EmployeeProfileComponent implements OnInit {
  model: any = {};
  employeeData = {
    employeeCode: 10001,
    status: 'working',
    mobile: '7666369197',
    email: 'komalr07@gmail.com',
    branch: 'IT'
  };
  constructor(){

  }

  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  

  onSubmit() {
    console.log('Form submitted:', this.model);
  }
}
