import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';
import { Subject, takeUntil } from 'rxjs';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'products-categories-banner',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule],
  templateUrl: './categories-banner.component.html',
  styles: ``
})
export class CategoriesBannerComponent implements OnInit , OnDestroy{
  categories:Category[]=[]
  endSub$:Subject<any> = new Subject();
  constructor(private category:CategoriesService){}

  ngOnInit():void{
    this._getCategories();
  }

  private _getCategories(){
    this.category.getCategories().pipe(takeUntil(this.endSub$)).subscribe(cats=>{
      this.categories =cats;
    });
  }
ngOnDestroy(): void {
  // this.endSub$.next();
  this.endSub$.complete();
}

}
