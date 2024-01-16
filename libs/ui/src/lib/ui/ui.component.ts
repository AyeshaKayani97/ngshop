import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'ngshop-ui',
  standalone: true,
  imports: [CommonModule, BannerComponent,SliderComponent],
  // export:[BannerComponent],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css',
})

// Export components to make them available outside the file
export class UiComponent {}
export { BannerComponent, SliderComponent  };
