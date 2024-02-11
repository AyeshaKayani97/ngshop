import { Route } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
// import { HomePageComponent } from './pages/home-page/home-page.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomePageComponent
  },
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
