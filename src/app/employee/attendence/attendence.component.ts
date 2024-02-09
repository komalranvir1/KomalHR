import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrl: './attendence.component.css'
})
export class AttendenceComponent implements OnInit {
  employeeId: any;
  employeeData: any;
  attendanceList: any;
  constructor(private empService: EmployeeService,private router:Router) {

  }
  ngOnInit() {
    this.attendance();
    this.totalHours();
  }

  attendance() {
    const jsonString = localStorage.getItem('auth');

    if (jsonString !== null) {
      const parsedObject = JSON.parse(jsonString);
      this.employeeId = parsedObject.id;

      console.log(parsedObject);
      this.empService.getAattendenceOfEmployee(this.employeeId).subscribe((res: any) => {
        console.log(res);
      
        this.attendanceList = res;
       
        
      });
    }

  }
  reg(){
    this.router.navigateByUrl('/employee/regulization')

  }

  totalHours(){
    this.employeeId = this.attendanceList.id;
    this.empService.getTotalDuration(this.employeeId).subscribe((res:any) =>{
      console.log(res);
      
    })
  }
}