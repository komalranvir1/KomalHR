import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee/service/employee.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrl: './salary.component.css'
})
export class SalaryComponent implements OnInit {

  constructor(private empService: EmployeeService) { }


  ngOnInit(): void {
    // this.generatePdf();
  }



  generatePdf(): void {
    this.empService.generatePdf().subscribe(
      (response: Blob) => {
        const fileURL = URL.createObjectURL(response);
        window.open(fileURL, 'salrySlip');
      },
      (error: any) => {
        console.error('Error generating PDF:', error);
      }
    );
  }

}
