import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AnalyticsComponent } from './shared/components/analytics/analytics.component';
import { DemographicsComponent } from './shared/components/demographics/demographics.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
