import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Subject, takeUntil } from 'rxjs';
import { Product } from '../../models/product';
import { ButtonModule } from 'primeng/button';
import { CartItem, CartService } from '@ngshop/order';


@Component({
  selector: 'products-product-item',
  standalone: true,
  imports: [CommonModule, RouterModule,ButtonModule],
  templateUrl: './product-item.component.html',
  styles: ``
})
export class ProductItemComponent implements OnInit {
  @Input() product!:Product
  cartItem:CartItem = {
    productId:this.product.id,
    quantity:1
  }
    constructor(private cartService: CartService){
   
  }
  
  ngOnInit(): void {
  }

  addProductToCart(){
    this.cartService.setCartItem(this.cartItem)

  }



  

}
