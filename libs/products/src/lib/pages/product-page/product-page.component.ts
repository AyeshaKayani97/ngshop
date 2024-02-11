import { CommonModule } from '@angular/common';
import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { InputNumberModule } from 'primeng/inputnumber';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { Subject, takeUntil } from 'rxjs';
import { GalleryComponent } from '@ngshop/ui';

@Component({
  selector: 'product-page',
  standalone: true,
  imports: [InputNumberModule, RatingModule, CommonModule, RouterModule, FormsModule, GalleryComponent, CommonModule,RouterModule],
  templateUrl: './product-page.component.html',
  styles: ``
})
export class ProductPageComponent implements OnInit , OnDestroy{
  product?:Product;
  quantity!:number;
  endSub$:Subject<any>= new Subject
  constructor(
    private prodService:ProductsService,
    private route: ActivatedRoute
  ){}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params["productid"]){
        this._getProduct(params["productid"])
      }

    })


    this._addProductToCart()
      

  }


  private _addProductToCart(){

  }
  private _getProduct(id:string){
    this.prodService.getProduct(id).pipe(takeUntil(this.endSub$)).subscribe(resProduct=>{
      this.product=resProduct;
    })

  }

  ngOnDestroy(): void {
      this.endSub$.complete();
  }
  


}
