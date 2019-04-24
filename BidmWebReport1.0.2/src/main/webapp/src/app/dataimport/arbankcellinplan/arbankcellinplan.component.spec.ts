import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbankcellinplanComponent } from './arbankcellinplan.component';

describe('ArbankcellinplanComponent', () => {
  let component: ArbankcellinplanComponent;
  let fixture: ComponentFixture<ArbankcellinplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbankcellinplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbankcellinplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
