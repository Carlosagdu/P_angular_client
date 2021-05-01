import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { DashboardFooterComponent } from 'src/app/shared/components/dashboard-footer/dashboard-footer.component';
import { DashboardHeaderComponent } from 'src/app/shared/components/dashboard-header/dashboard-header.component';
import { DashboardSidebarComponent } from 'src/app/shared/components/dashboard-sidebar/dashboard-sidebar.component';
import { AdminComponent } from './admin.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AnalyticsComponent } from 'src/app/shared/components/analytics/analytics.component';
import { DemographicsComponent } from 'src/app/shared/components/demographics/demographics.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    DashboardSidebarComponent,
    AnalyticsComponent,
    DemographicsComponent,
  ],
  imports: [
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
})
export class AdminModule {}
