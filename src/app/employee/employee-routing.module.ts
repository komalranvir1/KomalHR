import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeComponent } from './employee/employee.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { RegulizationComponent } from './regulization/regulization.component';


const routes: Routes = [

  {
    path: '', component: EmployeeComponent, children: [
      { path: 'home', component: EmployeeHomeComponent },
       { path: 'profile', component: EmployeeProfileComponent },
       { path: 'attendence', component: AttendenceComponent },
       {path: "leave", component: LeaveFormComponent},
       {path: "regulization", component: RegulizationComponent},



    ]
  },
  // { path: 'exam', component: ExamComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
