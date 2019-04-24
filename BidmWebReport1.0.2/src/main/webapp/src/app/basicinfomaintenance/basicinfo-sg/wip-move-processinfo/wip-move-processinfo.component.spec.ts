import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WipMoveProcessinfoComponent } from './wip-move-processinfo.component';

describe('WipMoveProcessinfoComponent', () => {
  let component: WipMoveProcessinfoComponent;
  let fixture: ComponentFixture<WipMoveProcessinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WipMoveProcessinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WipMoveProcessinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
