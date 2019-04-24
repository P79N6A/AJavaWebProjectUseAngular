import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CstpnlComponent } from './cstpnl.component';

describe('CstpnlComponent', () => {
  let component: CstpnlComponent;
  let fixture: ComponentFixture<CstpnlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CstpnlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CstpnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
