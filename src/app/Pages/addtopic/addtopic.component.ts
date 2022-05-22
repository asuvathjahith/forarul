import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/service/course-service.service';

@Component({
  selector: 'app-addtopic',
  templateUrl: './addtopic.component.html',
  styleUrls: ['./addtopic.component.css']
})
export class AddtopicComponent implements OnInit {
  
  constructor(private courseService:CourseServiceService) { }
  course:any
  topic:any={
   Id:0,
   CourseId:0,
   Name:null,
   Duration:null,
   Content:null
  }
  ngOnInit(): void {
    this.OnSubmit();
    this.getcourses();
  }
  OnSubmit(){
    console.log(this.topic)
    this.courseService.posttopic(this.topic).subscribe((res)=>{
      console.log(res);
    })
  } 
  getcourses(){
    this.courseService.getAllCourses().
    subscribe(res=>{
      console.log(res)
      this.course=res
    })
  }
}
