import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs'; 
import { HttpClient } from '@angular/common/http'; 
// export interface Employee{ 
//   id:string; 
//   fullname:string; 
//   mail:string; 
//   roles:string; 
//   address:string; 
//   contactNo:Number;
// }

@Injectable({
  providedIn: 'root'
})
export class DataService { 
  private jsonUrl = 'assets/data.json';

  constructor(private _http:HttpClient) { } 
  // getData():Observable<Employee[]>{ 
  //   return this._http.get<{Employees:Employee[]}>(this.jsonUrl).pipe( 
  //     map(response => response.Employees)
  //   );
  // } 
   
 addEmployee(data:any):Observable<any>{ 
  return this._http.post("http://localhost:3000/employee",data)
 }  
 updateEmployee(id:number,data:any):Observable<any>{ 
  return this._http.put(`http://localhost:3000/employee/${id}`,data)
 } 
  
 getEmployeeList():Observable<any>{ 
  return this._http.get("http://localhost:3000/employee");
 } 
  
 deleteEmployee(id:number):Observable<any>{ 
  return this._http.delete(`http://localhost:3000/employee/${id}`);
 }
}
