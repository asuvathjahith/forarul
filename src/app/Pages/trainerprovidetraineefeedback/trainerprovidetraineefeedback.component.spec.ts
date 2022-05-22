import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerprovidetraineefeedbackComponent } from './trainerprovidetraineefeedback.component';

describe('TrainerprovidetraineefeedbackComponent', () => {
  let component: TrainerprovidetraineefeedbackComponent;
  let fixture: ComponentFixture<TrainerprovidetraineefeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerprovidetraineefeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerprovidetraineefeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
