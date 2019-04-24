import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfmovehourComponent } from './cfmovehour.component';

describe('CfmovehourComponent', () => {
  let component: CfmovehourComponent;
  let fixture: ComponentFixture<CfmovehourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfmovehourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfmovehourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
