import { Component } from '@angular/core';
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
// import { timer } from 'rxjs';
// import { lastValueFrom } from 'rxjs';



@Component({
  selector: 'ngshop-category-form',
  standalone: true,
  imports: [CardModule,ToolbarModule, ButtonModule, InputTextModule,FormsModule,ReactiveFormsModule,CommonModule,ToastModule],
  templateUrl: './category-form.component.html',
  styles: ``
})
export class CategoryFormComponent {

  form!:FormGroup;
  curentCategoryId:string = "";
  isSubmitted:boolean = false;
  editMode:boolean = false;
  constructor(private location:Location,private router:Router,private route:ActivatedRoute,private messageService:MessageService ,private formBilder:FormBuilder, private categoriesService:CategoriesService ){}

  ngOnInit ():void{
    this.form = this.formBilder.group({
      name:["",Validators.required],
      icon:["",Validators.required]
    })
    this._checkEditMode()
  }


  onSubmit(){
    this.isSubmitted = true;
    if(this.form.invalid){
      return;
    }
    const category:Category = {
      id:this.curentCategoryId,
      name:this.CategoryForm['name'].value,
      icon:this.CategoryForm['icon'].value,

    }
    if(this.editMode){
      this._updateCategory(category)
    }else{
      this._addCategory(category)

    }


  }
  get CategoryForm(){
    return this.form.controls
  }
// checking if updatemode is ture



  private _addCategory(category:Category){
    this.categoriesService.createCategory(category).subscribe(
      {
      next: (response) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category has been created' });
        lastValueFrom(timer(2000)).then(() => {
          this.location.back();
        });
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Category is not created' });
      }
    }
    );

  }
  private _updateCategory(category:Category){
    this.categoriesService.updateCategory(category).subscribe(
      (category: Category) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `Category ${category.name} is updates!`
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
  private _checkEditMode() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.editMode = true;
        this.curentCategoryId =params["id"];
        // this.currentCategoryId = params.id;
        this.categoriesService.getCategory(params['id']).subscribe((category) => {
          this.categoryForm["name"].setValue(category.name);
          this.categoryForm["icon"].setValue(category.icon);
          this.categoryForm["color"].setValue(category.color);
        });
      }
    });
  }
// form control variable
  get categoryForm(){
    return this.form.controls
  }

}
