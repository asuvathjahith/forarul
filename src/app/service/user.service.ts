import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class userService {

  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:5001/User/"
  getAllUsersByRole(id: number): Observable<any> {
    return this.http.get<any>(this.baseurl + `Role/${id}`)
  }
  
}
