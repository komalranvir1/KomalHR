import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  step = "step1";
  startTime: Date = new Date();
  elapsedTime: number = 0;
  private intervalId: any;
  checkInStatus: any;
  isRed: boolean = false;
  currentState: string = "";
  employeeData: any;
  employeeId: any;

  constructor(private router: Router, private empService: EmployeeService) {

  }



  ngOnInit(): void {
    this.setActive();
    this.intervalId = setInterval(() => {
      this.elapsedTime = new Date().getTime() - this.startTime.getTime();
    }, 1000);
    const jsonString = localStorage.getItem('auth');
    this.employeeData = jsonString;
    this.checkInStatus = localStorage.getItem('checkInStatus')
    this.currentState = localStorage.getItem('buttonState') || 'checkin';
  }

  setActive() {
    this.step = "";
    let url = window.location.href;
    let urlLength = url.length;
    console.log(urlLength);

    this.step = url.substring(31, urlLength);

  }
  LogIn() {

  }
  Home() {
    let promiseData = new Promise((resolved, reject) => {
      this.router.navigateByUrl('/employee/home');
      resolved(10);
    });
    promiseData.then(() => {
      this.setActive();
    });

  }
  profile() {

    let promiseData = new Promise((resolved, reject) => {
      this.router.navigateByUrl('/employee/profile');
      resolved(10);
    });
    promiseData.then(() => {
      this.setActive();
    });
  }
  Salary() {
    let promiseData = new Promise((resolved, reject) => {
      this.router.navigateByUrl('/employee/salary');
      resolved(10);
    });
    promiseData.then(() => {
      this.setActive();
    });

  }
  contact() {
    this.router.navigateByUrl('contact')
  }
  attendence() {
    let promiseData = new Promise((resolved, reject) => {
      this.router.navigateByUrl('/employee/attendence');
      resolved(10);
    });
    promiseData.then(() => {
      this.setActive();
    });

  }
  reg() {
    this.router.navigateByUrl('/employee/regulization')

  }
  Leave() {
    this.router.navigateByUrl('/employee/leave')
  }
  onClickButton() {
    if (this.currentState === 'checkin') {
      this.checkIn();
    } else if (this.currentState === 'checkout') {
      this.checkOut();

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
}
