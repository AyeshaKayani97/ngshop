import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterOutlet } from '@angular/router';
import { CategoriesService } from '@ngshop/products/services/categories.service';
import { ProductsService } from '@ngshop/products/services/products.service';
import { ConfirmationService } from 'primeng/api';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersService } from '../../../libs/users/src/lib//services/users.service';
import { JwtInterceptor } from '../../../libs/users/src/lib//services/jwt.interceptor';
import { AuthGuard } from '../../../libs/users/src/lib//services/auth-guard.service';
import { AuthService } from '../../../libs/users/src/lib/services/auth.service';





// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  standalone: true,
  imports: [
    CommonModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    NxWelcomeComponent,
    RouterModule,
    HttpClientModule,
    ToastModule,
    RouterOutlet,
    InputTextModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    CategoriesService,
    MessageService,
    ProductsService,
    ConfirmationService,
    AuthGuard,
    AuthService,
    UsersService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptor,multi: true 
    }
  ],
  selector: 'admin-root',
  templateUrl: './app.component.html',
  // animations: [myNgIfAnimation] 
})
export class AppComponent {
  title = 'admin';
}
