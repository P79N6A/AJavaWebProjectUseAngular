import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleWatchboardComponent } from './module-watchboard.component';

describe('ModuleWatchboardComponent', () => {
  let component: ModuleWatchboardComponent;
  let fixture: ComponentFixture<ModuleWatchboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleWatchboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleWatchboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
