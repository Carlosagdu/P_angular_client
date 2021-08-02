import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardFooterComponent } from 'src/app/shared/components/dashboard-footer/dashboard-footer.component';
import { DashboardHeaderComponent } from 'src/app/shared/components/dashboard-header/dashboard-header.component';
import { DashboardSidebarComponent } from 'src/app/shared/components/dashboard-sidebar/dashboard-sidebar.component';
import { AdminComponent } from './admin.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AnalyticsComponent } from 'src/app/shared/components/analytics/analytics.component';
import { DemographicsComponent } from 'src/app/shared/components/demographics/demographics.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AreaComponent } from 'src/app/shared/charts/area/area.component';
import { DashboardHomepageComponent } from 'src/app/shared/components/dashboard-homepage/dashboard-homepage.component';
import { DashboardExperienceComponent } from 'src/app/shared/components/dashboard-experience/dashboard-experience.component';
import { DashboardEducationComponent } from 'src/app/shared/components/dashboard-education/dashboard-education.component';
import { DashboardPublicationComponent } from 'src/app/shared/components/dashboard-publication/dashboard-publication.component';
import { DashboardAboutmeComponent } from 'src/app/shared/components/dashboard-aboutme/dashboard-aboutme.component';
import { PublicationContainerComponent } from 'src/app/shared/containers/admin/publication-container/publication-container.component';
import { MatSortModule } from '@angular/material/sort';
import { DialogPopupComponent } from 'src/app/shared/components/dialog-popup/dialog-popup.component';
import { FormPublicationComponent } from 'src/app/shared/components/form-publication/form-publication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    DashboardSidebarComponent,
    AnalyticsComponent,
    DemographicsComponent,
    AreaComponent,
    DashboardHomepageComponent,
    DashboardExperienceComponent,
    DashboardEducationComponent,
    DashboardPublicationComponent,
    DashboardAboutmeComponent,
    PublicationContainerComponent,
    DialogPopupComponent,
    FormPublicationComponent,
  ],
  imports: [
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    FlexLayoutModule,
    HighchartsChartModule,
    AppRoutingModule,
    ReactiveFormsModule,
    QuillModule.forRoot({
      placeholder: 'Type here the content of your post',
    }),
  ],
})
export class AdminModule {}
