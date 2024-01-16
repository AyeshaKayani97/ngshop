import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule , ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { CommonModule,Location } from '@angular/common';
import { ProductsService } from '@ngshop/products/services/products.service';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { CategoriesService } from '@ngshop/products/services/categories.service';
import { Category } from '@ngshop/products/models/category';
import { EditorModule } from 'primeng/editor';
import { MessageService } from 'primeng/api';
import { Product } from '@ngshop/products/models/product';
import { timer, lastValueFrom } from 'rxjs';





@Component({
  selector: 'ngshop-product-form',
  standalone: true,
  imports: [CardModule,ToolbarModule, ButtonModule,EditorModule, InputTextModule,DropdownModule,FormsModule,ReactiveFormsModule,ToastModule,CommonModule,InputNumberModule,InputTextareaModule,InputSwitchModule],
  templateUrl: './product-form.component.html',
  styles: ``
})
export class ProductFormComponent {
  editMode = false;
  isSubmitted = false;
  displayImage:string | ArrayBuffer = "";
  // categories= [];
  categories: Category[] = [];
 
  form!:FormGroup;

  constructor(private formBuilder:FormBuilder,private messageService:MessageService , private location:Location, private productsService:ProductsService,private categoriesService:CategoriesService){}
ngOnInit():void{
  this._initForm();
  this._getCategories();


}

  onSubmit(){
    this.isSubmitted= true;
    if(this.form.invalid) return;
    const productFormData = new FormData()
    Object.keys(this.productForm).map(key=>{
      console.log(key)
      productFormData.append(key,this.productForm[key].value)
      this._addProduct(productFormData)
        
    })

  };
  private _initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      countInStock: ['', Validators.required],
      description: ['', Validators.required],
      richDescription: [''],
      image: ['', Validators.required],
      isFeatured: [false]
    });
  }
  // onCategoryChange(){
  //   const selectedCategoryId = this.form.value.category;
  //   if (selectedCategoryId) {
      
  //   }

  // }
private _addProduct(productData: FormData) {
  this.productsService.createProducts(productData).subscribe(
    (product: Product) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: `Product ${product.name} is created!`
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
        detail: 'Product is not created!'
      });
    }
  );
}
// private _getCategories(){
//   this.categoriesService.getCategories().subscribe(cats=>{
//     //  this.categories = cats Category[];
//     console.log('Categories received:', cats);
//      this.categories = cats.map(category => ({ name: category.name } as Category));
//   })
// }
private _getCategories() {
  this.categoriesService.getCategories().subscribe((cats) => {
    console.log(cats)
    this.categories = cats;
  });
}

get productForm(){
  return this.form.controls;
}
onUploadImage(event:any){
  const file = event.target.files[0];
  if(file){
    this.form.patchValue({'image':file})
    this.form.get("image")?.updateValueAndValidity()
    const fileReader = new FileReader()
    fileReader.onload = ()=>{
      this.displayImage = fileReader.result as string | ArrayBuffer
    }
    fileReader.readAsDataURL(file)
  }

}





}
