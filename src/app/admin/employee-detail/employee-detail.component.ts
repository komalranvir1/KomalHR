import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../employee/service/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})

export class EmployeeDetailComponent implements OnInit {
  displayDialog: boolean = false;
  selectedItem: any;
  filteredItems: any[]=[];


  visible: boolean = false;

  employeeId: any;
  employeeDetail: any = [];
  displayModal: boolean = false;
  searchText: any;
  suggestions: string[] = [];
  showSuggestions: boolean = false;
  
  constructor(private activatedRoute: ActivatedRoute, private employeeServce: EmployeeService) {

  }
  
  ngOnInit(): void {
    this.showDialog();
    this.employeeId = this.activatedRoute.snapshot.params['id'];
    console.log(this.employeeId);
    this.getEmployeeById(this.employeeId);
  }



  showDialog() {
      this.visible = true;
  }


  getEmployeeById(id: any) {
    this.employeeServce.getEmployeeById(this.employeeId).subscribe((res: any) => {
      console.log(res);
      this.employeeDetail = {
        id: res.id,
        name: res.name,
        email: res.email,
        salary: res.salary,
        join_date: res.date,
        contactNo: res.contactNo,
        status: res.status
      };

      console.log(this.employeeDetail); 


    });


  }
}
