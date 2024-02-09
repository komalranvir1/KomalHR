import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-Home',
  templateUrl: './employee-home.component.html',
  styleUrl: './employee-home.component.css'
})
export class EmployeeHomeComponent implements OnInit {
  isShow: boolean = false;
  submitted = false;
  isCheckIn: boolean = false;
  employeeData: any;
  employeeId: any;
  attendanceList: any;
  loginData: any;
  startTime: Date = new Date();
  elapsedTime: number = 0;
  private intervalId: any;
  loginForm: FormGroup;
   checkInStatus: any;
  isRed: boolean = false;
  currentState: string="";

  constructor(private fb: FormBuilder, private http: HttpClient, private datePipe: DatePipe, private router: Router, private empService: EmployeeService) {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.elapsedTime = new Date().getTime() - this.startTime.getTime();
    }, 1000);
    const jsonString = localStorage.getItem('auth');
    this.employeeData = jsonString;
     this.checkInStatus = localStorage.getItem('checkInStatus')
     this.currentState = localStorage.getItem('buttonState') || 'checkin';

  }

  onClickButton(){
    if (this.currentState === 'checkin') {
      this.checkIn();  
    } else if (this.currentState === 'checkout') {
      this.checkOut() ;
        
    }
  
  }
  checkIn() {

    const jsonString = localStorage.getItem('auth');
    if (jsonString !== null) {
      const parsedObject = JSON.parse(jsonString);
      this.employeeId = parsedObject.id;
      console.log(parsedObject);
      this.empService.checkin(this.employeeId).subscribe((res: any) => {
        console.log(res);
        this.currentState = 'checkout';
        // Save the updated state to localStorage
        localStorage.setItem('buttonState', this.currentState);
        // this.isCheckIn = false;

      });
    }
  }
  checkOut() {

    const jsonString = localStorage.getItem('auth');

    if (jsonString !== null) {
      const parsedObject = JSON.parse(jsonString);
      this.employeeId = parsedObject.id;
      console.log(parsedObject);
      this.empService.checkout(this.employeeId).subscribe((res: any) => {
        console.log(res);
        this.currentState = 'checkin';
        localStorage.setItem('buttonState', this.currentState);

      });
    }

  }
  isShowable() {
    // localStorage.setItem("auth", JSON.stringify(res))
    if (localStorage.length === 0) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  }


  get f() { return this.loginForm.controls; }

  submit() {
    this.submitted = true;
    this.loginData = this.loginForm.value;
    console.log(this.loginData);

    this.empService.getLoginData(this.loginData).subscribe((res: any) => {
      console.log(res);
      let formattedDate = this.datePipe.transform(res.date, 'yyyy-MM-dd');
      console.log(formattedDate);

      localStorage.setItem("auth", JSON.stringify(res))
      if (localStorage.length === 0) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    });

  }
 
 
}