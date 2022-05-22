import { Component, OnInit } from '@angular/core';
import { TraineeFeedbackService } from 'src/app/service/trainee-feedback.service';

@Component({
  selector: 'app-trainerprovidetraineefeedback',
  templateUrl: './trainerprovidetraineefeedback.component.html',
  styleUrls: ['./trainerprovidetraineefeedback.component.css']
})
export class TrainerprovidetraineefeedbackComponent implements OnInit {
  CourseId=5;
  TraineeId=1;
  TrainerId=2;
  Traineename='jack';

  constructor(private traineeFeedbackservice:TraineeFeedbackService) { }
TraineeFeedback:any={
  id:0,
  traineeId:this.TraineeId,
  trainerId:this.TrainerId,  
  courseId: this.CourseId, 
  feedback: ''
}
  ngOnInit(): void {
  }
  OnSubmit(){
    console.log(this.TraineeFeedback)
    this.traineeFeedbackservice.postTraineeFeedback(this.TraineeFeedback).subscribe((res)=>{
      console.log(res);
    })
  }

}
