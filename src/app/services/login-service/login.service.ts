import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl="http://localhost:8081/api/v1/login";

  constructor(private http:HttpClient) { }

  getAllLoginDetails():Observable<any[]>{ 
    return this.http.get<any[]>(this.apiUrl);
  }

  addLoginDetail(data:any[]):Observable<any[]>{ 
    return this.http.post<any[]>(this.apiUrl,data);
  }

  deleteLoginDetails(id:number):Observable<any[]>{ 
    return this.http.delete<any[]>(`${this.apiUrl}/${id}`);
  }

  updateLoginDetails(id:number,data:any):Observable<any[]>{ 
    return this.http.put<any[]>(`${this.apiUrl}/${id}`,data);
  }
}
