import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesServiceService {

  private apiURL='http://localhost:8081/api/v1/roles';
  constructor(private http:HttpClient) {  
   } 


   //for displaying the roles
   getAllRoles():Observable<any[]>{ 
    return this.http.get<any[]>(this.apiURL);
  } 
   
  //for updating the roles
  updateRoles(id:number,data:any[]):Observable<any>{ 
    return this.http.put<any[]>(`${this.apiURL}/${id}`,data);
  } 

  //for adding new roles
  addRole(data:any[]):Observable<any>{ 
    return this.http.post<any[]>(`${this.apiURL}`,data)
  } 

  //for deleting a role
  deleteRole(id:number):Observable<any>{ 
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
