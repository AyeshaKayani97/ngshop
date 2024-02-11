import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchProductComponent } from '../components/search-product/search-product.component';
import { FeaturedProductsComponent } from '../components/featured-products/featured-products.component';
import { CategoriesBannerComponent } from '../components/categories-banner/categories-banner.component';
import { ProductItemComponent } from '../components/product-item/product-item.component';
import { GalleryComponent } from '@ngshop/ui';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'ngshop-products',
  standalone: true,
  imports: [CommonModule, SearchProductComponent,RouterModule, GalleryComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
export { SearchProductComponent,CategoriesBannerComponent,FeaturedProductsComponent,ProductItemComponent,GalleryComponent};
