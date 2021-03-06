import { NgModule } from '@angular/core';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { HomepageAlbumComponent } from 'src/app/shared/components/homepage-album/homepage-album.component';
import { HomepageHeroComponent } from 'src/app/shared/components/homepage-hero/homepage-hero.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    HomepageHeroComponent,
    HomepageAlbumComponent,
    FooterComponent,
  ],
  imports: [],
})
export class HomeModule {}
