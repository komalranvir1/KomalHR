import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }


  getAllEmployee(currentPage: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .set('page', currentPage.toString())
      .set('size', pageSize.toString());
    return this.http.get('http://localhost:8080/employee/getAll', { params });
  }
  getEmployeeById(employeeId: any): Observable<any> {
    return this.http.get('http://localhost:8080/employee/getEmployeeByID/' + employeeId);

  }
  addEmployee(emp: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/employee/addEmployee', emp);
  }



  deleteEmployee(empId: any): Observable<any> {
    return this.http.delete<any>('http://localhost:8080/employee/deleteEmployeeById/ ' + empId);
  }

  updateEmployeeById(employeeId: any, EmployeeData: any): Observable<any> {
    return this.http.put<any>('http://localhost:8080/employee/updateEmployee/' + employeeId + "/", EmployeeData);
  }

 

  markAttendance(attendance: any): Observable<any> {
    return this.http.post('http://localhost:8080/employee/mark/', attendance);
  }
  getEmployeeAttendances(employeeId: any): Observable<any> {
    return this.http.get('http://localhost:8080/attendence/' + employeeId);

  }
  saveAttendance(employeeId: any, newAttendance: any): Observable<any> {
    return this.http.post('http://localhost:8080/attendence/' + employeeId, newAttendance);

  }
  createAttendence(createAtd:any): Observable<any> {
    return this.http.post('http://localhost:8080/attendence/create', createAtd);
  }

  addAttendence(attendance: any): Observable<any> {
    return this.http.post('http://localhost:8080/attendence/add', attendance);
  }
  checkin(employeeId: any): Observable<any> {
    return this.http.get('http://localhost:8080/attendence/checkIn/'+ employeeId);
  }
  checkout(employeeId: any): Observable<any> {
    return this.http.get('http://localhost:8080/attendence/checkOut/'+ employeeId);
  }
  getLoginData(loginData: any): Observable<any> {
    return this.http.post('http://localhost:8080/attendence/auth', loginData);
  }
  getAattendenceOfEmployee(employeeId: any): Observable<any> {
    return this.http.get('http://localhost:8080/attendence/employeeeAttendence/'+ employeeId);
  }
  getTotalDuration(employeeId: any): Observable<any> {
    return this.http.get('http://localhost:8080/attendence/total-duration/'+ employeeId);

  }

  addHolidays(holidays: any): Observable<any> {
    return this.http.post('http://localhost:8080/employee/addHoidays', holidays);

  }
 
  getAllHolidays(): Observable<any>  {
    return this.http.get('http://localhost:8080/employee/getHolidays');

  }

  generateEmployeePdf(): Observable<Blob>  {
    return this.http.get('http://localhost:8080/employee/generate-employee-pdf', { responseType: 'blob' });

  }
  generatePdf(): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/pdf',
      'Accept': 'application/pdf'
    });

    return this.http.get('http://localhost:8080/pdf/generate-pdf', { headers: headers, responseType: 'blob'  });
  }  
 

  // downloadPdf(): Observable<Blob> {
  //   return this.http.get('http://localhost:8080/pdf/generate', { responseType: 'blob' });
  // }
}
