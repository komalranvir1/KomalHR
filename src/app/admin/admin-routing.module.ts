import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  
  {
    path: '', component: AdminHomeComponent, children: [
      {path: "employee", component: EmployeesComponent},

      {path: "employee/:id", component: EmployeesComponent},
      {path: "employee-list", component: EmployeeListComponent}
    ]
  },
  // { path: 'exam', component: ExamComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
