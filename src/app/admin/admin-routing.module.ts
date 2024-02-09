import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeesComponent } from './employees/employees.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AdminComponent } from './admin/admin.component';
import { SalaryComponent } from './salary/salary.component';

const routes: Routes = [
  
  {
    path: '', component: AdminHomeComponent, children: [
      {path: "home", component: AdminComponent},
      {path: "employee", component: EmployeesComponent},
      {path: "employee/:id", component: EmployeesComponent},
      {path: "employee-list", component: EmployeeListComponent},
      {path: "employee-detail/:id", component: EmployeeDetailComponent},
      {path: "attendence", component: AttendenceComponent},
      {path: "salary", component: SalaryComponent},



    ]
  },
  // { path: 'exam', component: ExamComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
