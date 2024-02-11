import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NxWelcomeComponent } from './nx-welcome.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent,ProductPageComponent,HomePageComponent, RouterModule, HeaderComponent,FooterComponent,HttpClientModule],
  selector: 'ngshop-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngshop';
}
