import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyBringComponent} from './my-bring.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('pages -> personal-center -> TakeComponent', () => {
  let component: MyBringComponent;
  let fixture: ComponentFixture<MyBringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyBringComponent],
      imports: [HttpClientTestingModule,
        RouterTestingModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
