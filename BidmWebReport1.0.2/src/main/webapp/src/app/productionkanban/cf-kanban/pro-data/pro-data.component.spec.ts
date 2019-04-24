import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProDataComponent } from './pro-data.component';

describe('ProDataComponent', () => {
  let component: ProDataComponent;
  let fixture: ComponentFixture<ProDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
