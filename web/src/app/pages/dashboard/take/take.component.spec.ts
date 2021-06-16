import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TakeComponent} from './take.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('pages -> personal-center -> TakeComponent', () => {
  let component: TakeComponent;
  let fixture: ComponentFixture<TakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TakeComponent],
      imports: [HttpClientTestingModule,
        RouterTestingModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
