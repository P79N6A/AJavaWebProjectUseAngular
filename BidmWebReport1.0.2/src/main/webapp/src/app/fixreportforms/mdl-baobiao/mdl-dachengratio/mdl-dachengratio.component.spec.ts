import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdlDachengratioComponent } from './mdl-dachengratio.component';

describe('MdlDachengratioComponent', () => {
  let component: MdlDachengratioComponent;
  let fixture: ComponentFixture<MdlDachengratioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdlDachengratioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdlDachengratioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
