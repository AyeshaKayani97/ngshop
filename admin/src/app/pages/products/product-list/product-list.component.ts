import { Component,OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import {ProductsService} from '@ngshop/products/services/products.service'
import { Location } from '@angular/common';
import { Product } from '@ngshop/products/models/product';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';





@Component({
  selector: 'admin-product-list',

  standalone: true,
  imports: [ToolbarModule,ButtonModule,InputTextModule,CardModule,TableModule,ToastModule, DatePipe],
  templateUrl: './product-list.component.html',
  styles: ``
})
export class ProductListComponent {
  products:Product[] = [];
  constructor(private productsService:ProductsService, private location:Location,private router:Router){}
  ngOnInit():void{
    this._getProducts()
  }
  updateProduct(productId:string){
    this.router.navigateByUrl(`products/form/${productId}`)
  }
  private _getProducts(){
    this.productsService.getProducts().subscribe(prods=>{
      this.products = prods;
    })
  }
}
