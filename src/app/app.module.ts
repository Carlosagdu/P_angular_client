import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './layout/admin/admin.module';
import { HomeModule } from './layout/home/home.module';
import { BlogModule } from './layout/blog/blog.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    AdminModule,
    HomeModule,
    BlogModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
