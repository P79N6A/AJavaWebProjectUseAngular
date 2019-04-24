import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModWipComponent } from './mod-wip.component';

describe('ModWipComponent', () => {
  let component: ModWipComponent;
  let fixture: ComponentFixture<ModWipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModWipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModWipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
