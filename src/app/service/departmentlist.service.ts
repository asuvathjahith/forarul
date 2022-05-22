import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../Models/department';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:5001/"
  getAllDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(this.baseurl + `Departments`)
  }
  postdepartment(data:any): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.baseurl + 'Create', data)
  }

}
