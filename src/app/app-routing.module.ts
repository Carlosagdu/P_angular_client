import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AnalyticsComponent } from './shared/components/analytics/analytics.component';
import { DemographicsComponent } from './shared/components/demographics/demographics.component';
import { DashboardHomepageComponent } from './shared/components/dashboard-homepage/dashboard-homepage.component';
import { DashboardExperienceComponent } from './shared/components/dashboard-experience/dashboard-experience.component';
import { DashboardEducationComponent } from './shared/components/dashboard-education/dashboard-education.component';
import { DashboardPublicationComponent } from './shared/components/dashboard-publication/dashboard-publication.component';
import { DashboardAboutmeComponent } from './shared/components/dashboard-aboutme/dashboard-aboutme.component';
import { FormPublicationComponent } from './shared/components/form-publication/form-publication.component';
import { BlogComponent } from './layout/blog/blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AnalyticsComponent,
      },
      {
        path: 'demographics',
        component: DemographicsComponent,
      },
      {
        path: 'homepage',
        component: DashboardHomepageComponent,
      },
      {
        path: 'experience',
        component: DashboardExperienceComponent,
      },
      {
        path: 'education',
        component: DashboardEducationComponent,
      },
      {
        path: 'publication',
        component: DashboardPublicationComponent,
      },
      {
        path: 'publication/new',
        component: FormPublicationComponent,
      },
      {
        path: 'aboutme',
        component: DashboardAboutmeComponent,
      },
    ],
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
