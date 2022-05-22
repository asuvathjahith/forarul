

import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/service/review.service';

@Component({
  selector: 'app-assignreviewlist',
  templateUrl: './assignreviewlist.component.html',
  styleUrls: ['./assignreviewlist.component.css']
})
export class AssignreviewlistComponent implements OnInit {

  constructor(private reviewService: ReviewService) { }
  data: any
  ngOnInit(): void {
    this.getReviewByStatus()
  }

  getReviewByStatus(){
    this.reviewService.getReviewByStatus(3).subscribe(res => {
      console.log(res)
      this.data = res
    })
  }
}
