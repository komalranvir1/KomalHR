import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeComponent } from './employee/employee.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { RegulizationComponent } from './regulization/regulization.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    EmployeeHomeComponent,
    EmployeeProfileComponent,
    EmployeeComponent,
    AttendenceComponent,
    LeaveFormComponent,
    RegulizationComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    CalendarModule,
    InputTextareaModule,
    DropdownModule,
  ],
  providers: [DatePipe],
})
export class EmployeeModule { }
