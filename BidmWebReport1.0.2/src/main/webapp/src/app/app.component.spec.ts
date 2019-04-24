import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppMenuComponent, AppSubMenuComponent } from 'core/layout/menu/app.menu.component';
import { AppTopBarComponent } from 'core/layout/topbar/app.topbar.component';
import { AppFooterComponent } from 'core/layout/footer/app.footer.component';
import { AppBreadcrumbComponent } from '@breadcrumb/app.breadcrumb.component';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { ScrollPanelModule } from 'primeng/primeng';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          RouterTestingModule, ScrollPanelModule
      ],
      declarations: [
          AppComponent,
          AppMenuComponent,
          AppSubMenuComponent,
          AppTopBarComponent,
          AppFooterComponent,
          AppBreadcrumbComponent
      ],
      providers: [BreadcrumbService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
