import { Component,OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Category } from '@ngshop/products/models/category';
import {CategoriesService} from '@ngshop/products/services/categories.service'
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';
import { timer } from 'rxjs';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';


const UI_MODULE=[
  ToolbarModule,
  ButtonModule,
  TableModule,
  ToastModule
]


@Component({
  selector: 'admin-categories-list',
  standalone: true,
  imports: [CardModule, UI_MODULE],
  templateUrl: './categories-list.component.html',

})
export class CategoriesListComponent {
  categories:Category[] = []

  //  categories = [
  //   {
  //     id:1,
  //     name:"category-1",
  //     icon:"category-1-icon",
  
  //   }, {
  //     id:2,
  //     name:"category-2",
  //     icon:"category-2-icon",
      
  //   },
  //   {
  //     id:3,
  //     name:"category-3",
  //     icon:"category-3-icon",
      
  //   }
  // ]
  constructor(private categoriesServices: CategoriesService,private router:Router,private messageService:MessageService, private location:Location){}
  ngOnInit():void{

    this.categoriesServices.getCategories().subscribe(cats=>{
      this.categories = cats;
    })


  }
  deleteCategory(categoryId:string){
      this.categoriesServices.deleteCategory(categoryId).subscribe({
          next: (response) => {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category has been deleted' });
            lastValueFrom(timer(2000)).then(() => {
              this.location.back();
            });
          },
          error: (error) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Category is not deleted' });

          }
        });
      }
      updateCategory(categoryId:string){
        this.router.navigateByUrl(`categories/form/${categoryId}`)
      }



}
