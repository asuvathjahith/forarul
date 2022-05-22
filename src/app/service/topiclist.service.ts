import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic} from '../Models/topic';
import { Course } from '../Models/course';
import { CourseDTO } from '../Models/CourseDTO';


@Injectable({
  providedIn: 'root'
})
export class TopiclistService {
  
  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:5001/Courses/"
  getAllTopicByCourseId(id: number): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.baseurl + `${id}/Topics`)
}
  gettopicdetailsbyid(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseurl + 'GetTopicDetailsById')
  }
}
