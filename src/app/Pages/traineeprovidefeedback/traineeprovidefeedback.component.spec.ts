import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeprovidefeedbackComponent } from './traineeprovidefeedback.component';

describe('TraineeprovidefeedbackComponent', () => {
  let component: TraineeprovidefeedbackComponent;
  let fixture: ComponentFixture<TraineeprovidefeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeprovidefeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeprovidefeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
