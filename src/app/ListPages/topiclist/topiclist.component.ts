import { Component, OnInit } from '@angular/core';
import { CourseDTO } from 'src/app/Models/CourseDTO';
import { Topic } from 'src/app/Models/topic';
import { User } from 'src/app/Models/user';
import { CourseServiceService } from 'src/app/service/course-service.service';



import { TopiclistService } from 'src/app/service/topiclist.service';
import { userService } from 'src/app/service/user.service';

@Component({
  selector: 'app-topiclist',
  templateUrl: './topiclist.component.html',
  styleUrls: ['./topiclist.component.css']
})
export class TopiclistComponent implements OnInit {
  constructor(private topicService:TopiclistService ,private userservice:userService,private courseservice: CourseServiceService) { }
  trainer:any={
    id:7,
    };
  course:any={
    id:1,
    statusId:1,
    trainerId:7,
    departmentId:1,
    description:'Integration',
    name:'Integrating',
    duration:'4 hours',
    isDisabled:false
  };
  data:any;
  ngOnInit(): void {
    this.getAllTopics();
    this.getcourse();
    this.trainerforcourse();
  }

  getAllTopics(){
    this.topicService.getAllTopicByCourseId(1).
      subscribe(res =>{
        console.log(res)
        this.data=res
      })  
  }
  getcourse(){
    this.courseservice.getCoursebyid(1).
    subscribe(res=>{
      console.log(res)
      this.course=res
    })
  }
  trainerforcourse(){
    this.courseservice.getcoursebyuserid(7).
    subscribe(res=> {
      console.log(res)
      this.trainer=res
    })
  }

// constructor(private topicService: TopiclistService) { }
//   data: TopicDTO[] = []
//   ngOnInit(): void {
//     this.getAll()
//   }
//   getAll() {
//     this.topicService.getAllTopicByCourseId(1).subscribe(res => {
//       console.log(res)
//       this.data = res
//     })
//   }
}
