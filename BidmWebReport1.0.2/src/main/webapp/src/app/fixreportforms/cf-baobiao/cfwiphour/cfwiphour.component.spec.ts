import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfwiphourComponent } from './cfwiphour.component';

describe('CfwiphourComponent', () => {
  let component: CfwiphourComponent;
  let fixture: ComponentFixture<CfwiphourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfwiphourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfwiphourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
