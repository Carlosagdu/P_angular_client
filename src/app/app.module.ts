import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './layout/admin/admin.component';
import { HomeComponent } from './layout/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [AppComponent, AdminComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    MaterialModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
