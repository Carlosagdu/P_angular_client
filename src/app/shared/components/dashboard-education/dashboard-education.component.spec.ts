import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEducationComponent } from './dashboard-education.component';

describe('DashboardEducationComponent', () => {
  let component: DashboardEducationComponent;
  let fixture: ComponentFixture<DashboardEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
