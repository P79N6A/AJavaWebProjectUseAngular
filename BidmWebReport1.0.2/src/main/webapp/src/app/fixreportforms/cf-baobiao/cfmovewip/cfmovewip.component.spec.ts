import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfmovewipComponent } from './cfmovewip.component';

describe('CfmovewipComponent', () => {
  let component: CfmovewipComponent;
  let fixture: ComponentFixture<CfmovewipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfmovewipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfmovewipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
