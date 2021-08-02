import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageAlbumComponent } from './homepage-album.component';

describe('HomepageAlbumComponent', () => {
  let component: HomepageAlbumComponent;
  let fixture: ComponentFixture<HomepageAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
