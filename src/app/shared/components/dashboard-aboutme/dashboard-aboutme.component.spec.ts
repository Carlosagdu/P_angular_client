import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAboutmeComponent } from './dashboard-aboutme.component';

describe('DashboardAboutmeComponent', () => {
  let component: DashboardAboutmeComponent;
  let fixture: ComponentFixture<DashboardAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAboutmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
