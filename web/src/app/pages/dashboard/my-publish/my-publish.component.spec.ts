import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyPublishlComponent} from './my-publishl.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('pages -> personal-center -> TakeComponent', () => {
  let component: MyPublishlComponent;
  let fixture: ComponentFixture<MyPublishlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyPublishlComponent],
      imports: [HttpClientTestingModule,
        RouterTestingModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPublishlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
