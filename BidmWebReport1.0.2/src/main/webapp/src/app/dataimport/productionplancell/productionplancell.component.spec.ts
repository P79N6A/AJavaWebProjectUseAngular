import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionplancellComponent } from './productionplancell.component';

describe('ProductionplancellComponent', () => {
  let component: ProductionplancellComponent;
  let fixture: ComponentFixture<ProductionplancellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionplancellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionplancellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
