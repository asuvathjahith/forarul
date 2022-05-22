import { Component, OnInit } from '@angular/core';
import { CourseDTO } from 'src/app/Models/CourseDTO';
import { CourseServiceService } from 'src/app/service/course-service.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  role="Co-Ordinator"
  constructor(private courseService:CourseServiceService) { }
  public data: CourseDTO[] = []
  page :number= 1;
  totallength:any;

  ngOnInit(): void {
   this.getAllCourses()
  }
  getAllCourses(){
    this.courseService.getAllCourses().
        subscribe(res => {
          console.log(res)
          this.totallength=res.length;
          this.data=res
        })
  }    
}
