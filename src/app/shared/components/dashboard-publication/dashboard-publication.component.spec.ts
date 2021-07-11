import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPublicationComponent } from './dashboard-publication.component';

describe('DashboardPublicationComponent', () => {
  let component: DashboardPublicationComponent;
  let fixture: ComponentFixture<DashboardPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPublicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
