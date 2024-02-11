import { Route } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
// import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { OdersListComponent } from './pages/orders/oders-list/oders-list.component';
import { LoginComponent } from './pages/login/login.component';
// import { OdersDetailComponent } from './pages/orders/oders-detail/oders-detail.component';
// import { AuthGuard } from '../../../libs/users/src/lib//services/auth-guard.service';



// D:\angular\ngshop\admin\src\app\pages\orders\oders-list


export const appRoutes: Route[] = [
    {
        path: "",
        component :ShellComponent,
        // canActivate:[AuthGuard],
        children: [
            {
              path: '',
              component: DashboardComponent
            },
            {
                path: 'categories',
                component: CategoriesListComponent
              },
              {
                path: 'categories/form',
                component: CategoryFormComponent
              },
              {
              path: 'categories/form/:id',
              component: CategoryFormComponent
              },
              {
                path: 'products',
                component: ProductListComponent
              },
              {
                path: 'products/form',
                component: ProductFormComponent
              },
              {
                path: 'products/form/:id',
                component: ProductFormComponent
              },
              {
                path: 'products/form/:id',
                component: ProductFormComponent
              },
              {
                path: 'users',
                component: UsersListComponent
              },
               {
                path: 'users/form',
                component: UsersFormComponent
              },
              {
                path: 'users/form/:id',
                component: UsersFormComponent
              },
              {
                path: 'orders',
                component: OdersListComponent
              },
              //  {
              //   path: 'users/order-detail/:id',
              //   component: OdersDetailComponent
              // },
              
              {
                path:"login",
                component:LoginComponent
              }
        ]
    },
    {
      path:"**",
      redirectTo:"",
      pathMatch:"full"
    }
   
    
];
