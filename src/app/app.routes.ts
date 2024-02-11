import { Route } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

export const appRoutes: Route[] = [

    { path: '', component: HomePageComponent },
    { path: 'products', component: ProductPageComponent },
    

];
