import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {SliderComponent } from '@ngshop/ui';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavComponent } from './shared/nav/nav.component';
// import { ProductSearchComponent } from '@ngshop/products/components/product-search/product-search.component'
// import { ProductsComponent } from '@ngshop/products';
import { CategoriesService, ProductsComponent, ProductsService } from '@ngshop/products';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { FooterComponent } from './shared/footer/footer.component';
import { CartService, OrderComponent } from '@ngshop/order';
import { ProductPageComponent } from './pages/product-page/product-page.component';








@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SliderComponent,HomePageComponent, HeaderComponent, NavComponent, ProductsComponent, HttpClientModule,FooterComponent, OrderComponent, ProductPageComponent],
  providers: [
    CategoriesService,
    MessageService,
    ProductsService,
    CartService,

   
  ],
  selector: 'ngshop-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shop';
  constructor(cartService:CartService){
    cartService.initCartLocalStorage();
    console.log(cartService.initCartLocalStorage())
  }
}
