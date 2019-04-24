import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M1m2wipComponent } from './m1m2wip.component';

describe('M1m2wipComponent', () => {
  let component: M1m2wipComponent;
  let fixture: ComponentFixture<M1m2wipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1m2wipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M1m2wipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
