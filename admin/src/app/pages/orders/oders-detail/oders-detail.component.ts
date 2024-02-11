import { Component } from '@angular/core';
import { Order } from '@ngshop/products/models/order';
import {OrdersService} from '@ngshop/products/services/orders.service'
import { MessageService } from 'primeng/api';
import { ORDER_STATUS } from '../order.constants';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';



@Component({
  selector: 'admin-oders-detail',
  standalone: true,
  imports: [CommonModule,CardModule,ToastModule,ToolbarModule,ButtonModule,DropdownModule,FieldsetModule],
  templateUrl: './oders-detail.component.html'
})
export class OdersDetailComponent {
  order!: Order ;
  orderStatuses = [];
  selectedStatus: any;

  constructor(
    private orderService: OrdersService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._mapOrderStatus();
    this._getOrder();
  }
  private _mapOrderStatus() {
    this.orderStatuses = Object.keys(ORDER_STATUS).map((key) => {
      return {
        id: key,
        name: ORDER_STATUS[key].label
      };
    });
  }

  private _getOrder() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.orderService.getOrder(params["id"]).subscribe((order) => {
          this.order = order;
          this.selectedStatus = order.status;
        });
      }
    });
  }

  onStatusChange(event:any) {
    this.orderService.updateOrder({ status: event.value }, this.order.id).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Order is updated!'
        });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Order is not updated!'
        });
      }
    );
  }

}
