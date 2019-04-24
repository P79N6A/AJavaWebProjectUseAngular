import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayOperComponent } from './array-oper.component';

describe('ArrayOperComponent', () => {
  let component: ArrayOperComponent;
  let fixture: ComponentFixture<ArrayOperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayOperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayOperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
