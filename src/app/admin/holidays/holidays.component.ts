import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../employee/service/employee.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrl: './holidays.component.css'
})
export class HolidaysComponent implements OnInit {
  HolidayForm: FormGroup;
  formattedDate: any;
  constructor(private fb: FormBuilder, private router: Router, private empService: EmployeeService) {
    this.HolidayForm = this.fb.group({
      upcomingHoliday: [''],
      holidayDate: [''],
      day: [''],

    })
  }

  ngOnInit(): void {
    // this.submit();
  }

  Cancel() {
    this.router.navigateByUrl('admin/home')
  }
  submit() {

    let holidays = this.HolidayForm.value;
    this.empService.addHolidays(holidays).subscribe((res: any) => {
      console.log(res);

      this.router.navigateByUrl('employee/home')
    });
  }
}
