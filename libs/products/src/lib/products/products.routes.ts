import { Route } from '@angular/router';
import { ProductListComponent } from '../pages/product-list/product-list.component';
import { ProductPageComponent } from '../pages/product-page/product-page.component';

export const productsRoutes: Route[] = [
    { path: 'products', component: ProductListComponent },
    { path: 'category/:categoryid', component: ProductListComponent },
    { path: 'products/:productid', component: ProductPageComponent }


];
