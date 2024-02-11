import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';




@Component({
  selector: 'products-featured-products',
  standalone: true,
  imports: [ProductItemComponent,CommonModule,RouterModule],
  templateUrl: './featured-products.component.html',
  styles: ``
})
export class FeaturedProductsComponent  implements OnInit, OnDestroy {
  featuredProducts:Product[]= [];


  endSub$:Subject<any>= new Subject();
  constructor(private productsService:ProductsService){
   
  }
  ngOnInit(): void {
    this._getFeaturedProducts();
  }



  private _getFeaturedProducts(){
    this.productsService.getFeaturdProducts(2).pipe(takeUntil(this.endSub$)).subscribe(products=>{
      this.featuredProducts = products;
    })


  }
  ngOnDestroy() {
    this.endSub$.complete();
  }

}
