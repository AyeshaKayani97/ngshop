import { Component } from '@angular/core';
import { CategoriesBannerComponent, FeaturedProductsComponent } from '@ngshop/products';
import { BannerComponent } from '@ngshop/ui';

@Component({
  selector: 'shop-home-page',
  standalone: true,
  imports: [BannerComponent, CategoriesBannerComponent,FeaturedProductsComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

}
