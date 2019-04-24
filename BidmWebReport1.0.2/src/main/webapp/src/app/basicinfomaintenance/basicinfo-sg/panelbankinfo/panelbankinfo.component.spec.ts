import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelbankinfoComponent } from './panelbankinfo.component';

describe('PanelbankinfoComponent', () => {
  let component: PanelbankinfoComponent;
  let fixture: ComponentFixture<PanelbankinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelbankinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelbankinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
