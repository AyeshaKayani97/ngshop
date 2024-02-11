import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { SearchProductComponent } from '@ngshop/products';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import {ProductSearchComponent} from '@ngshop/products/components/product-search'
// import { ProductSearchComponent } from '@ngshop/products/components/product-search/product-search.component'



@Component({
  selector: 'shop-header',
  standalone: true,
  imports: [NavComponent, SearchProductComponent,HomePageComponent,RouterModule,CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

}
