import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseDTO } from '../Models/CourseDTO';
import { Course } from '../Models/course';
import { Department } from '../Models/department';
import { Topic } from '../Models/topic';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  localurl: string;

  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:5001/"
  getAllCourses(): Observable<CourseDTO[]> {
    return this.http.get<CourseDTO[]>(this.baseurl + `Courses`)
  }
  getCoursebyid(id:number): Observable<CourseDTO[]> {
    return this.http.get<CourseDTO[]>(this.baseurl +`Courses/${id}`)
  }
  gettopicdetailsbyid(id:number): Observable<any> {
    return this.http.get<any>(this.baseurl + `Course/Topics/${id}`)
  }
  getcoursebyuserid(id:number):Observable<any>{
    return this.http.get<any>(this.baseurl + `Courses/Users/${id}`)
  }

  postcourse(data:any):Observable<any>{
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.baseurl + `Course/Course/`,data)
  }
  posttopic(data:any):Observable<any>{
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.baseurl + `Course/Topic/`,data)
  }
  getAllUsersByRoleId(id: number): Observable<any> {
    return this.http.get<any>("https://localhost:5001/User/GetUsersByRole")
  }
  // constructor(private http: HttpClient) { }
  // baseurl = "http://localhost:4200/courselist"
  // getAllUsersByRoleId(id: number): Observable<CourseDTO[]> {
  //   return this.http.get<CourseDTO[]>(this.baseurl + `GetAllCourses/${id}`)
  // }
}
