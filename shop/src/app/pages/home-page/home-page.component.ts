import { Component } from '@angular/core';
import { CategoriesBannerComponent, FeaturedProductsComponent } from '@ngshop/products';
import { BannerComponent } from '@ngshop/ui';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'shop-home-page',
  standalone: true,
  imports: [BannerComponent, CategoriesBannerComponent,FeaturedProductsComponent,HeaderComponent,FooterComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

}
