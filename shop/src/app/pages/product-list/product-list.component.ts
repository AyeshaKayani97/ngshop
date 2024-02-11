import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';

import { FormsModule } from '@angular/forms';
import { CategoriesService, Category, Product, ProductItemComponent, ProductsService } from '@ngshop/products';

@Component({
  selector: 'products-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule,ProductItemComponent,CheckboxModule,FormsModule],
  templateUrl: './product-list.component.html',
  styles: ``
})
export class ProductListComponent  implements OnInit, OnDestroy {
  // @Input () product = "";
  products: Product[] = [];
  isCategoryPage!:boolean;

  categories:Category[]= [];

  constructor(private productsService:ProductsService, private categoriesService:CategoriesService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      params["categoryid"]? this._getProducts([params["categoryid"]]):this._getProducts();
      params["categoryid"]? (this.isCategoryPage == true) :(this.isCategoryPage == false);
    })
    this._getProducts();
    this._getCategories();

      
  }
  // Get Products Function
  private _getProducts(categoriesFilter?:string[]){
    this.productsService.getProducts(categoriesFilter).subscribe(products=>{
      this.products = products;
    })
  }
  private _getCategories(){
    this.categoriesService.getCategories().subscribe(cats=>{
      this.categories = cats;
    })
  }
  categoryFilter(){
    const selectedCategories:any= this.categories?.filter(category=>category?.checked).map(category=>category?.id);
    console.log(selectedCategories);

    this._getProducts(selectedCategories);

  }
  ngOnDestroy(): void {
      
  }
}
