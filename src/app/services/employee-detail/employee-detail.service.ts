import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {
  private apiURL='http://localhost:8081/api/v1/employees';

  constructor(private http:HttpClient) { }

  //function to get all employees
  getAllEmployees():Observable<any[]>{ 
    return this.http.get<any[]>(this.apiURL);
  }

  //function to add employee
  addEmployee(data:any[]):Observable<any>{ 
    return this.http.post<any[]>(`${this.apiURL}`,data)
  } 

  //function to update employee details
  updateEmployee(data:any[],id:number):Observable<any[]>{ 
    return this.http.put<any[]>(`${this.apiURL}/${id}`,data)
  }

  //function to delete employee
  deleteEmployee(id:number):Observable<any[]>{ 
    return this.http.delete<any[]>(`${this.apiURL}/${id}`);
  }


}
