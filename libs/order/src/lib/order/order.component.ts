import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'ngshop-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  // constructor(cartService:CartService){
  //   cartService.initCartLocalStorage();
  //   console.log(cartService.initCartLocalStorage())
  // }
}
