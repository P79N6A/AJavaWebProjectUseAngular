import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfmoveplanComponent } from './cfmoveplan.component';

describe('CfmoveplanComponent', () => {
  let component: CfmoveplanComponent;
  let fixture: ComponentFixture<CfmoveplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfmoveplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfmoveplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
