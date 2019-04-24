import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductnameinfoComponent } from './productnameinfo.component';

describe('ProductnameinfoComponent', () => {
  let component: ProductnameinfoComponent;
  let fixture: ComponentFixture<ProductnameinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductnameinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductnameinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
