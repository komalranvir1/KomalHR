import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  employeedata:any= [];
  
 


  ngOnInit(): void {
    const jsonString =localStorage.getItem("myData");
    if (jsonString !== null) {
    const data = JSON.parse(jsonString);
    this.employeedata =data;
    console.log(this.employeedata);
    }
  }
 
 
 
}
