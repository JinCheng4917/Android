import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaViewComponent } from './eva-view.component';

describe('ViewComponent', () => {
  let component: EvaViewComponent;
  let fixture: ComponentFixture<EvaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
