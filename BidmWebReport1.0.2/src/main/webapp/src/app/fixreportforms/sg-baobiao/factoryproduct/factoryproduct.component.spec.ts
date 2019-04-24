import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryproductComponent } from './factoryproduct.component';

describe('FactoryproductComponent', () => {
  let component: FactoryproductComponent;
  let fixture: ComponentFixture<FactoryproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
