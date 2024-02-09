import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { SalaryComponent } from './salary/salary.component';

import { DialogModule } from 'primeng/dialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AutoCompleteModule } from 'primeng/autocomplete';


@NgModule({
  declarations: [
    AdminHomeComponent,
    EmployeeListComponent,
    EmployeesComponent,
    AttendenceComponent,
    AdminComponent,
    EmployeeDetailComponent,
    SalaryComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    OverlayPanelModule,
    AutoCompleteModule,
  ]
})
export class AdminModule { }
