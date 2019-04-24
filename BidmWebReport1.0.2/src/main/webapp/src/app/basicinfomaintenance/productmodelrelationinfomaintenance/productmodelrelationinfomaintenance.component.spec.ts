import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmodelrelationinfomaintenanceComponent } from './productmodelrelationinfomaintenance.component';

describe('ProductmodelrelationinfomaintenanceComponent', () => {
  let component: ProductmodelrelationinfomaintenanceComponent;
  let fixture: ComponentFixture<ProductmodelrelationinfomaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductmodelrelationinfomaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmodelrelationinfomaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
