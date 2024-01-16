import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {  BannerComponent, SliderComponent } from '@ngshop/ui';
import { HomePageComponent } from './pages/home-page/home-page.component';



@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BannerComponent, SliderComponent,HomePageComponent],
  selector: 'ngshop-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shop';
}
