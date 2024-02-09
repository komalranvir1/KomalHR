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
  // attendance: any = [];
  submitted = false;

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
  
  }
  get f() { return this.attendenceForm.controls; }

  // createAttendence() {
  //     let createAtd = this.attendenceForm.value;
  //     this.employeeService.createAttendence(createAtd).subscribe((res: any) => {
  //       console.log(res);

  //     });
    
  // }
addAttendence(){
  let attendance = this.attendenceForm.value;
  this.employeeService.addAttendence(attendance).subscribe((res:any) => {
console.log(res);

  });
}
  loadAttendances() {
    this.employeeService.getEmployeeAttendances(this.employeeId).subscribe((data: any) => {
      console.log(data);
      this.attendances = data;
    });
  }

  // saveAttendance() {
  //   this.newAttendance = this.attendenceForm.value;
  //   this.employeeService.saveAttendance(this.employeeId, this.newAttendance).subscribe((res: any) => {
  //     console.log(res);
  //     this.loadAttendances();
  //     this.newAttendance = {}; 
  //   });
  // }
  getAttendanceByEmployeeIdAndDate(employee_id: any, date: Date): void {

    if (this.employeeId !== undefined && this.date !== undefined) {
      this.employeeService.getAttendanceByEmployeeIdAndDate(this.employeeId, this.date)
        .subscribe(res => {
        
          this.attendances = res;

        }, error => {
          console.error('Error getting attendance', error);
        });
    } else {
      console.error('Invalid values for API call');
    }
  }
  // this.employeeService.getAttendanceByEmployeeIdAndDate(this.employee_id,this.date).subscribe((res: any) => {
  //   console.log(res);
  // });


  // getEmployeeAttendance(id: any) {
  //   this.employeeService.getEmployeeAttendance(this.id).subscribe((res: any) => {
  //     console.log(res);

  //   });
  // }

  // markAttendance(): void {
  //   let newAttendance = this.attendenceForm.value;

  //   // newAttendance.status = 'present';

  //   this.employeeService.markAttendance(newAttendance).subscribe(
  //     (res: any) => {
  //       console.log('Attendance marked successfully: ', res);

  //     },

  //   );
  // }



}
