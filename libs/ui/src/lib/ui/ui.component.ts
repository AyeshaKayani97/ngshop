import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';
import { BannerComponent } from '../components/banner/banner.component';
import { GalleryComponent } from '../components/gallery/gallery.component';

@Component({
  selector: 'ngshop-ui',
  standalone: true,
  imports: [CommonModule,SliderComponent,BannerComponent],
  // export:[BannerComponent],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css',
})

// Export components to make them available outside the file
export class UiComponent {}
export { BannerComponent, SliderComponent,GalleryComponent  };
