import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  getAttendanceByEmployeeIdAndDate(employee_id: any, date: Date): Observable<any> {
    return this.http.get<any>('http://localhost:8080/employee/get/' + employee_id + '/' + date);
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
  getAattendenceOfEmployee(employeeId: any) {
    return this.http.get('http://localhost:8080/attendence/employeeeAttendence/'+ employeeId);
  }
  getTotalDuration(employeeId: any) {
    return this.http.get('http://localhost:8080/attendence/total-duration/'+ employeeId);

  }

 

  downloadPdf(): Observable<Blob> {
    return this.http.get('http://localhost:8080/pdf/generate', { responseType: 'blob' });
  }
}
