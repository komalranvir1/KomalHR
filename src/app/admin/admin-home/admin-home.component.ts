import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {

  step = "step1";

  constructor(private router: Router) {

  }



  ngOnInit(): void {
    this.setActive();
  }

  setActive() {
    this.step = "";
    let url = window.location.href;
    let urlLength = url.length;
    console.log(urlLength);
    
    this.step = url.substring(28, urlLength);

  }

  Home() { 
    let promiseData = new Promise((resolved, reject) => {
      this.router.navigateByUrl('/admin');
      resolved(10);
    });
    promiseData.then(() => {
      this.setActive();
    });

  }
  employee() {
  
      let promiseData = new Promise((resolved, reject) => {
        this.router.navigateByUrl('/admin/employee-list');
        resolved(10);
      });
      promiseData.then(() => {
        this.setActive();
      });
  }
  Salary(){
    this.router.navigateByUrl('employee/salary')

  }
  contact(){
    this.router.navigateByUrl('contact')
  }
  attendence() {
    this.router.navigateByUrl('attendence')

  }
}
