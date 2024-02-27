import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  employeedata: any = [];
  barChart: any;
  donutChart: any;
  pieChart:any;
  lineChart:any;
  constructor(private router: Router) {

  }


  ngOnInit(): void {

    const jsonString = localStorage.getItem("myData");
    if (jsonString !== null) {
      const data = JSON.parse(jsonString);
      this.employeedata = data;
      console.log(this.employeedata);
    }
    this.createChart();
    this.DonutChart();
    this.PieChart();
    this.LineChart();
  }

  addHolidays() {
    this.router.navigateByUrl('admin/Holiday')
  }
  createChart() {
    this.barChart = new Chart("bar", {
      type: "bar",
      data: {
        labels: ["Dev-Ops", "Software", "Backend", "Frontend"],
        datasets: [
          {
            label: "Employees",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",

            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",

            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
        
        }
      }
    });
  }
  DonutChart() {
    this.donutChart = new Chart('donut', {
      type: 'doughnut',
      data: {
        labels: ['Data1', 'Data2'],
        datasets: [
          {
            data: [55, 45],
            backgroundColor: ['#abc9fb', 'rgba(255, 0, 0, 0.1)'],

          },
        ]
      },
      options: {

      }
    });
  }


  PieChart() {
    this.pieChart = new Chart('pie', {
      type : 'pie',
      data : {
        // labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              '#a832a4',
              '#ed6d91',
              '#72c1e8',
              '#9ebf43',
              '#4a4a8a',
              '#4ad458'
            ],
           
          },
        ]
     
      }
    });
   
  }
LineChart(){
  this.lineChart = new Chart('line',{
    type : 'line',
    data: {
      labels: ['D1', 'D2','D3','D4'],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: ['#abc9fb', 'rgba(255, 0, 0, 0.1)'],

        },
       
      ]
     
    },
  });
 
}
}
