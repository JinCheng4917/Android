import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcAddComponent } from './acAdd.component';

describe('AddComponent', () => {
  let component: AcAddComponent;
  let fixture: ComponentFixture<AcAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
