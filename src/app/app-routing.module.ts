import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonhomeComponent } from './Pages/commonhome/commonhome.component';
import { LoginpageComponent } from './Pages/loginpage/loginpage.component';
import { HomeComponent } from './Pages/home/home.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ProfileviewComponent } from './Pages/profileview/profileview.component';

import { ViewcourseCoordinatorComponent } from './Pages/viewcourse-coordinator/viewcourse-coordinator.component';
import { ViewmomComponent } from './Pages/viewmom/viewmom.component';
import { FeedbacktraineeComponent } from './Pages/feedbacktrainee/feedbacktrainee.component';
import { AssignreviewlistComponent } from './Pages/assignreviewlist/assignreviewlist.component';

import { ViewattendanceComponent } from './Pages/viewattendance/viewattendance.component';
import { CoordinatorlistComponent } from './ListPages/coordinatorlist/coordinatorlist.component';
import { ReviewerlistComponent } from './ListPages/reviewerlist/reviewerlist.component';
import { ReviewlistComponent } from './ListPages/reviewlist/reviewlist.component';
import { TraineelistComponent } from './ListPages/traineelist/traineelist.component';
import { TrainerlistComponent } from './ListPages/trainerlist/trainerlist.component';
import { ViewcoprofileComponent } from './Pages/viewcoprofile/viewcoprofile.component';
import { AssigncourseComponent } from './Pages/cancelreviewlist/assigncourse/assigncourse.component';
import { AssignreviewCoComponent } from './Pages/assignreview-co/assignreview-co.component';
import { AddcourseComponent } from './Pages/addcourse/addcourse.component';
import { AdddepartmentComponent } from './Pages/adddepartment/adddepartment.component';
import { ViewtrainerprofileComponent } from './Pages/viewtrainerprofile/viewtrainerprofile.component';
import { ViewtraineeprofileComponent } from './Pages/viewtraineeprofile/viewtraineeprofile.component';
import { ViewreviewerprofileComponent } from './Pages/viewreviewerprofile/viewreviewerprofile.component';
import { UploadmomComponent } from './Pages/uploadmom/uploadmom.component';
import { ViewheadprofileComponent } from './Pages/viewheadprofile/viewheadprofile.component';
import { TopicviewComponent } from './Pages/topicview/topicview.component';
import { CoursefeedbackComponent } from './Pages/coursefeedback/coursefeedback.component';
// import { TopiclistComponent } from './ListPages/topiclist/topiclist.component';
import { EdituserComponent } from './Pages/edituser/edituser.component';
import { AddusersComponent } from './Pages/addusers/addusers.component';
import { TopiclistComponent } from './ListPages/topiclist/topiclist.component';
import { ScheduledreviewComponent } from './scheduledreview/scheduledreview.component';

import { canceledreviewComponent } from './ListPages/canceledreview/canceledreview.component';
import { HeadDepartmentlistComponent } from './ListPages/head-departmentlist/head-departmentlist.component';
import { CoDepartmentlistComponent } from './ListPages/co-departmentlist/co-departmentlist.component';
import { completedreviewlistComponent } from './Pages/completedreviewlist/completedreviewlist.component';
import { CourselistComponent } from './ListPages/courselist/courselist.component';
import { AddtopicComponent } from './Pages/addtopic/addtopic.component';


const routes: Routes = [
  
  //Common Home
  { path: '', component: CommonhomeComponent },
  {path:'loginpage', component:LoginpageComponent},
  { path: 'Login', component: LoginpageComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Profileview', component: ProfileviewComponent },
  
  //Department routing
  { path:'adddepartment', component:AdddepartmentComponent},
  { path:'Deptlist', component:HeadDepartmentlistComponent},
  { path:'deptlist', component:CoDepartmentlistComponent},
  
  //add routing for users
  { path:'TraineeList/addtrainee', component:AddusersComponent},
  { path:'CoordinatorList/addcoordinator', component:AddusersComponent},
  { path:'ReviewerList/addreviewer', component:AddusersComponent},
  { path:'TrainerList/addtrainer', component:AddusersComponent},
  //edit routing for users
  { path:'TraineeList/edittrainee', component:EdituserComponent},
  { path:'CoordinatorList/editcoordinator', component:EdituserComponent},
  { path:'ReviewerList/editreviewer', component:EdituserComponent},
  { path:'TrainerList/edittrainer', component:EdituserComponent},
  
  {path:'coordinatorlist', component:CoordinatorlistComponent},
  {path:'reviewerlist', component:ReviewerlistComponent},
  {path:'traineelist', component:TraineelistComponent},
  {path:'trainerlist', component:TrainerlistComponent},
  
  { path:'profileview', component:ProfileviewComponent},
  { path:'viewtrainerprofile', component:ViewtrainerprofileComponent},
  { path:'viewcoprofile', component:ViewcoprofileComponent},
  { path:'viewreviewerprofile', component:ViewreviewerprofileComponent},
  { path:'viewtraineeprofile', component:ViewtraineeprofileComponent},
  { path:'headprofile',  component:ViewheadprofileComponent},
  { path:'coprofile',  component:ViewcoprofileComponent},

  //Course routing
  {path:'courses', component:AddcourseComponent},
  {path:'addcourse', component:AddcourseComponent},
  {path:'assigncourse', component:AssigncourseComponent},
  {path:'topiclist', component:TopiclistComponent},
  {path:'addtopic', component:AddtopicComponent},
  {path:'viewcourse', component:ViewcourseCoordinatorComponent},
  { path:'viewcourse', component:ViewcourseCoordinatorComponent },
  { path:'viewtopic', component:TopicviewComponent },  
  {path:'viewattendance', component:ViewattendanceComponent},
  { path:'viewattendance', component:ViewattendanceComponent },
  { path:'viewattendance', component:ViewattendanceComponent},
  {path:'coursefeedback', component:CoursefeedbackComponent},
  {path:'feedbacktrainee', component:FeedbacktraineeComponent},
  { path:'feedbacktrainee', component:FeedbacktraineeComponent },
  {path:'courselist', component:CourselistComponent},
  // { path:'courselist', component:CourselistComponent },
  
  //Review routing
  { path:'scheduledreview', component:ScheduledreviewComponent},
  { path:'assignreviewco', component:AssignreviewCoComponent},
  { path:'cancelreview', component:canceledreviewComponent },
  {path:'cancelreview', component:canceledreviewComponent },
  {path:'cancelreview', component:canceledreviewComponent },
  {path:'canceledreview', component:canceledreviewComponent},
  { path:'reviewlist', component:ReviewlistComponent},
  { path:'assignreviewlist', component:AssignreviewlistComponent },
  {path:'assignreviewlist', component:AssignreviewlistComponent},
  { path:'completedreviewlist', component:completedreviewlistComponent},
  { path:'uploadmom',  component:UploadmomComponent},
  { path:'viewmom', component:ViewmomComponent},
  {path:'viewmom', component:ViewmomComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }