import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabmovementComponent } from './fabmovement.component';

describe('FabmovementComponent', () => {
  let component: FabmovementComponent;
  let fixture: ComponentFixture<FabmovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabmovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabmovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
