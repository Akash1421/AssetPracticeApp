import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssestsService {
  private apiUrl="http://localhost:8081/api/v1/assest"

  constructor(private http:HttpClient) { }
 
  //for getting all the assests
  getAllAssests():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl); 
  } 
   
  //adding assest into the database
  addAssest(data:any[]):Observable<any[]>{ 
    return this.http.post<any[]>(`${this.apiUrl}`,data);
  }

  //updating the detail of a particular assest
  updateAssest(data:any[],id:number){ 
    return this.http.put<any[]>(`${this.apiUrl}/${id}`,data);
  }

  //deleting a particular assest
  deleteAssest(id:number):Observable<any[]>{ 
    return this.http.delete<any[]>(`${this.apiUrl}/${id}`);
  }
}
