import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/Models/topic';
import { CourseServiceService } from 'src/app/service/course-service.service';
import { TopiclistService } from 'src/app/service/topiclist.service';

@Component({
  selector: 'app-topicview',
  templateUrl: './topicview.component.html',
  styleUrls: ['./topicview.component.css']
})
export class TopicviewComponent implements OnInit {

  constructor(private topiclistservice:TopiclistService,private courseservice:CourseServiceService) { }
  topic:any={};
  ngOnInit(): void {
    this.gettopicdetails()
  }
  gettopicdetails(){
    this.courseservice.gettopicdetailsbyid(1).
    subscribe(res=> {
      console.log(res);
      this.topic=res;
    })
  }

}
