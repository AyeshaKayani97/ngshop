import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule , ReactiveFormsModule, Validators, } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { CommonModule,Location } from '@angular/common';
import { CategoriesService } from '@ngshop/products/services/categories.service';
import { Category } from '@ngshop/products/models/category';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { timer } from 'rxjs';
import {ColorPickerModule} from 'primeng/colorpicker';




@Component({
  selector: 'ngshop-category-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ColorPickerModule,CardModule,ToolbarModule, ButtonModule, InputTextModule,FormsModule,ReactiveFormsModule,CommonModule,ToastModule],
  templateUrl: './category-form.component.html',
  styles: ``
})
export class CategoryFormComponent implements OnInit {

  form!:FormGroup;
  curentCategoryId:string = "";
  isSubmitted:boolean = false;
  editMode:boolean = false;
  constructor(
    private location:Location,
    private router:Router,
    private route:ActivatedRoute,
    private messageService:MessageService ,
    private formBilder:FormBuilder,
    private categoriesService:CategoriesService
      ){}

  ngOnInit ():void{
    this.form = this.formBilder.group({
      name:["",Validators.required],
      icon:["",Validators.required],
      color: ['#fff']

    })
    this._checkEditMode()
  }


 
  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    const category: Category = {
      id:this.curentCategoryId,
      name:this.CategoryForm['name'].value,
      icon:this.CategoryForm['icon'].value,
      color:this.CategoryForm['color'].value,
    };
    if (this.editMode) {
      this._updateCategory(category);
    } else {
      this._addCategory(category);
    }
  }




private _addCategory(category: Category) {
  this.categoriesService.createCategory(category).subscribe(
    (category: Category) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: `Category ${category.name} is created!`
      });
      timer(2000)
        .toPromise()
        .then(() => {
          this.location.back();
        });
    },
    () => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Category is not created!'
      });
    }
  );
}


private _updateCategory(category: Category) {
  this.categoriesService.updateCategory(category).subscribe(
    () => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Category is updated!'
      });
      timer(2000)
        .toPromise()
        .then(() => {
          this.location.back();
        });
    },
    () => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Category is not updated!'
      });
    }
  );
}

  private _checkEditMode(){
    this.route.params.subscribe((params) => {
      console.log(params)
      const id= params["id"]
      console.log(id,"id")
      if (id) {
        this.editMode = true;
        this.curentCategoryId =id;
        this.categoriesService.getCategory(id).subscribe((category) => {
          this.CategoryForm["name"].setValue(category.name);
          this.CategoryForm["icon"].setValue(category.icon);
          this.CategoryForm["color"].setValue(category.color);
        });
 
      }
    });
  
  }
  deleteCategory(categoryId:string){
    this.categoriesService.deleteCategory(categoryId).subscribe(
      (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `Category has been  deleted!`
        });
        timer(2000)
          .toPromise()
          .then(() => {
            this.location.back();
          });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Category is not deleted!'
        });
      }
    )

  }

  get CategoryForm(){
    return this.form.controls
  }
}
