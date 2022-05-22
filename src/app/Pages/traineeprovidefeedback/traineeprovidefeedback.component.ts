import { Component, OnInit } from '@angular/core';
import { CourseFeedbackService } from 'src/app/service/course-feedback.service';

@Component({
  selector: 'app-traineeprovidefeedback',
  templateUrl: './traineeprovidefeedback.component.html',
  styleUrls: ['./traineeprovidefeedback.component.css']
})
export class TraineeprovidefeedbackComponent implements OnInit {

  constructor(private courseFeedbackService:CourseFeedbackService) { }
  CourseId=5;
  coursename='java';
  UserId=1;
  username='jack';
  CourseFeedback:any={
    id: 0,
    courseId: this.CourseId,
    ownerId: this.UserId,
    feddback: '',
    rating: ''
  }
  ngOnInit(): void {
  }
  OnSubmit(){
    console.log(this.CourseFeedback)
    this.courseFeedbackService.postCourseFeedback(this.CourseFeedback).subscribe((res)=>{
      console.log(res);
    })
  }

}
