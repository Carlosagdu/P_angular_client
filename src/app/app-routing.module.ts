import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AdminComponent } from './layout/admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
