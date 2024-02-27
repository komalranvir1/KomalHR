import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee/service/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrl: './attendence.component.css'
})
export class AttendenceComponent implements OnInit {
  attendanceList  :any;

  attendances: any = [];
  attendenceForm: FormGroup;
  newAttendance: any = {};
  storedData: any;
  id: number = 0;
  date!: Date;
  dateTime: string = '';
  employeeId: any;
  employees: any;
  constructor(private employeeService: EmployeeService, private fb: FormBuilder, private activatedRoute: ActivatedRoute) {
   
    this.attendenceForm = this.fb.group({
      employee_id: ['', Validators.required],
      date: ['', Validators.required],
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
    });
  }
  ngOnInit(): void {
  this.loadAttendances();
  }
  get f() { return this.attendenceForm.controls; }

 
addAttendence(){
  let attendance = this.attendenceForm.value;
  this.employeeService.addAttendence(attendance).subscribe((res:any) => {
console.log(res);

  });
}
  loadAttendances() {
    const jsonString = localStorage.getItem('auth');

    if (jsonString !== null) {
      const parsedObject = JSON.parse(jsonString);
      this.employeeId = parsedObject.id;

      console.log(parsedObject);
    
    this.employeeService.getAattendenceOfEmployee(this.employeeId).subscribe((data: any) => {
      console.log(data);
      this.attendanceList = data;
    });
  }
  }





}
