import { NgModule } from '@angular/core';
import { BlogHeaderComponent } from 'src/app/shared/components/blog-header/blog-header.component';
import { HomeModule } from '../home/home.module';
import { BlogComponent } from './blog.component';

@NgModule({
  imports: [HomeModule],
  declarations: [BlogComponent, BlogHeaderComponent],
})
export class BlogModule {}
