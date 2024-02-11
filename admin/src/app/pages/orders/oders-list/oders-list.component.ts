import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Order } from '@ngshop/products/models/order';
import {OrdersService} from '@ngshop/products/services/orders.service'
import { ToastModule } from 'primeng/toast';
import { MessageService,ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ORDER_STATUS } from '../order.constants';
import { TagModule } from 'primeng/tag';


@Component({
  selector: 'ngshop-oders-list',
  standalone: true,
  imports: [CardModule,ToolbarModule,ButtonModule,TableModule,ToastModule,ConfirmDialogModule,RouterModule,CommonModule,TagModule],
  templateUrl: './oders-list.component.html',
  styleUrl: './oders-list.component.css'

})
export class OdersListComponent {
  orders: Order[] = [];
  orderStatus = ORDER_STATUS;
 

  constructor(
    private ordersService: OrdersService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ){}
  ngOnInit(): void {
    this._getOrders();
  
  }


  _getOrders() {
    this.ordersService.getOrders().subscribe((orders) => {
      this.orders = orders;
      console.log(orders);

    });
  }

  showOrder(orderId:string) {
    this.router.navigateByUrl(`orders/${orderId}`);
  }

  deleteOrder(orderId: string) {
    this.confirmationService.confirm({
      message: 'Do you want to Delete this Order?',
      header: 'Delete Order',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ordersService.deleteOrder(orderId).subscribe(
          () => {
            this._getOrders();
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Order is deleted!'
            });
          },
          () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Order is not deleted!'
            });
          }
        );
      }
    });
  }

}
