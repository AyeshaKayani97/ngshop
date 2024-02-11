import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesBannerComponent, FeaturedProductsComponent, ProductItemComponent, SearchProductComponent } from './products/products.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'category/:categoryid',
    component: ProductListComponent
  },
  {
    path: 'products/:productid',
    component: ProductPageComponent
  }
];


@NgModule({
  declarations: [
    ProductItemComponent,SearchProductComponent,FeaturedProductsComponent, CategoriesBannerComponent, ProductListComponent,
    ProductPageComponent
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductItemComponent,SearchProductComponent,FeaturedProductsComponent, CategoriesBannerComponent, ProductListComponent,
    ProductPageComponent
  ],
  exports: [
    ProductItemComponent,
    SearchProductComponent,
    FeaturedProductsComponent, 
    CategoriesBannerComponent,
    ProductListComponent,
    ProductPageComponent


    
  ]
})

export class ProductsModule {}
