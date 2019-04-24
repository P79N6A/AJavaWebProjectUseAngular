import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProDataShishiComponent } from './pro-data-shishi.component';

describe('ProDataShishiComponent', () => {
  let component: ProDataShishiComponent;
  let fixture: ComponentFixture<ProDataShishiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProDataShishiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProDataShishiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
