import { HttpClient, HttpParams } from '@angular/common/http';
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
    return this.http.get('http://localhost:8080/employee/getAll',{ params });
  }
  getEmployeeById(employeeId: any): Observable<any> {
    return this.http.get('http://localhost:8080/employee/getEmployeeByID/' + employeeId );

  }
  addEmployee(emp : any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/employee/addEmployee',emp);
  }



  deleteEmployee(empId : any) : Observable<any> {
    return this.http.delete<any>('http://localhost:8080/employee/deleteEmployeeById/ '+empId);
  }

 updateEmployeeById(employeeId: any, EmployeeData: any): Observable<any> {
  return this.http.put<any>('http://localhost:8080/employee/updateEmployee/'+employeeId +"/", EmployeeData);
}


  downloadPdf(): Observable<Blob> {
    return this.http.get('http://localhost:8080/pdf/generate', { responseType: 'blob' });
  }
}
