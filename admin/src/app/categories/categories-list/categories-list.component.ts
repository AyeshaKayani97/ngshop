import { Component,OnInit,OnDestroy } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Category } from '@ngshop/products/models/category';
import {CategoriesService} from '@ngshop/products/services/categories.service'
import { ToastModule } from 'primeng/toast';
import { MessageService,ConfirmationService } from 'primeng/api';
import { Location } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


const UI_MODULE=[
  ToolbarModule,
  ButtonModule,
  TableModule,
  ToastModule,
  ConfirmDialogModule,
]


@Component({
  selector: 'admin-categories-list',
  standalone: true,
  imports: [CardModule, UI_MODULE,CommonModule,RouterModule],
  templateUrl: './categories-list.component.html',

})
export class CategoriesListComponent {
  categories:Category[] = []
  endsubs$: Subject<any> = new Subject();


  constructor(private categoriesService: CategoriesService, private confirmationService: ConfirmationService,private router:Router,private messageService:MessageService, private location:Location){}
  ngOnInit():void{
    this._getCategories();

  }
  ngOnDestroy() {
    this.endsubs$.next('some value');
    this.endsubs$.complete();
  }





      updateCategory(categoryId:string){
        this.router.navigateByUrl(`categories/form/${categoryId}`)
      }

      deleteCategory(categoryId: string) {
        this.confirmationService.confirm({
          message: 'Do you want to Delete this Category?',
          header: 'Delete Category',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            this.categoriesService.deleteCategory(categoryId).pipe(takeUntil(this.endsubs$)).subscribe(
              () => {
                this._getCategories();
                this.messageService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: 'Category is deleted!'
                });
              },
              () => {
                this.messageService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: 'Category is not deleted!'
                });
              }
            );
          }
        });
      }





      
      private _getCategories(){
        this.categoriesService.getCategories().subscribe(cats=>{
          this.categories = cats;
        })
      }
      


}
