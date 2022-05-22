import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/service/review.service';

@Component({
  selector: 'app-cancelreviewlist',
  templateUrl: './cancelreviewlist.component.html',
  styleUrls: ['./cancelreviewlist.component.css']
})
export class CancelreviewlistComponent implements OnInit {

  constructor(private reviewService: ReviewService) { }
  data: any
  ngOnInit(): void {
    this.getReviewByStatus();
  }
  getReviewByStatus(){
    this.reviewService.getReviewByStatus(2).subscribe(res => {
      console.log(res)
      this.data = res
    })
  }

}
