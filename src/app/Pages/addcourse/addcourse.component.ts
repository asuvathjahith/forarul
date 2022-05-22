import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/service/course-service.service';
import { DepartmentService } from 'src/app/service/departmentlist.service';
import { userService } from 'src/app/service/user.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  constructor(private courseService:CourseServiceService, private departmentservice:DepartmentService, private userservice : userService) { }    
  department:any
  trainer:any
  Course:any={
    id:0,
    statusId:1,
    trainerId:7,
    departmentId:1,
    description:'Integration',
    name:'Integrating',
    duration:'4 hours',
    isDisabled:false
  }
  ngOnInit(): void {
    this.OnSubmit();
    this.getalltrainer();
    this.getalldepartment();
  }
  OnSubmit(){
    console.log(this.Course)
    this.courseService.postcourse(this.Course).subscribe((res)=>{
      console.log(res);
    })
 
  }
  getalltrainer() {
    this.userservice.getAllUsersByRole(3).subscribe(res=>{
    console.log(res);
    this.trainer=res;
    })
  }
  getalldepartment(){
    this.departmentservice.getAllDepartment().subscribe(res=>{
      console.log(res);
      this.department=res;
  })
  }
}