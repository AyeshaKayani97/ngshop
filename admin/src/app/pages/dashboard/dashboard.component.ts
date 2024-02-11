import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { UsersService } from '@ngshop/products/services/users.service';
import { ProductsService } from '@ngshop/products/services/products.service';
import { OrdersService } from '@ngshop/products/services/orders.service';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'admin-dashboard',
  standalone: true,
  imports: [TableModule, CardModule,ToolbarModule,ButtonModule,InputTextModule,ToastModule,CommonModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  statistics=[];

  constructor(
    private userService:UsersService,
    private productService:ProductsService,
    private ordersService:OrdersService,


  ){}

  ngOnInit(): void {
    combineLatest([
      this.ordersService.getOrdersCount(),
      this.productService.getProductsCount(),
      this.userService.getUsersCount(),
      this.ordersService.getTotalSales()
    ]).subscribe((values:any) => {
      this.statistics = values;
    });

  }
}
