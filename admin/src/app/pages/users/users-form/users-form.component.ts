import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule , ReactiveFormsModule, Validators, } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { CommonModule,Location } from '@angular/common';
import { UsersService } from '@ngshop/products/services/users.service';
// import { CategoriesService } from '@ngshop/products/services/categories.service';
import { User } from '@ngshop/products/models/user';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { timer } from 'rxjs';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import * as countriesLib from "i18n-iso-countries"
declare const require: any;



@Component({
  selector: 'ngshop-users-form',
  standalone: true,
  imports: [CardModule,InputSwitchModule,InputMaskModule,DropdownModule,ToolbarModule,ButtonModule,InputTextModule,ToastModule,CommonModule,FormsModule,ReactiveFormsModule,TagModule],
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.css'
})
export class UsersFormComponent {
editMode:boolean=false;
form!: FormGroup;
isSubmitted:boolean= false;
currentUserId:string="";
// countries:[] = [];
countries: { id: string; name: string }[] = [];

constructor(private messageService:MessageService,private usersService:UsersService, private location:Location, private route:ActivatedRoute,private formBilder:FormBuilder){}
ngOnInit ():void{
  this._initUserForm();
  this._getCountries();
  this._checkEditMode();
}


private _initUserForm() {
  this.form = this.formBilder.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    isAdmin: [false],
    street: [''],
    apartment: [''],
    zip: [''],
    city: [''],
    country: ['']
  });
}
onSubmit() {
  this.isSubmitted = true;
  if (this.form.invalid) {
    return;
  }
  const user: User = {
    id: this.currentUserId,
    name: this.userForm["name"].value,
    email: this.userForm["email"].value,
    phone: this.userForm["phone"].value,
    isAdmin: this.userForm["isAdmin"].value,
    street: this.userForm["street"].value,
    apartment: this.userForm["apartment"].value,
    zip: this.userForm["zip"].value,
    city: this.userForm["city"].value,
    country: this.userForm["country"].value
  };
  if (this.editMode) {
    this._updateUser(user);
  } else {
    this._addUser(user);
  }
}



private _addUser(user: User) {
  this.usersService.createUser(user).subscribe(
    (user: User) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: `User ${user.name} is created!`
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
        detail: 'User is not created!'
      });
    }
  );
}
private _updateUser(user:User){
  this.usersService.updateUser(user).subscribe(
    () => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'User is updated!'
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
        detail: 'User is not updated!'
      });
    }
  );
  
}

// checking edit mode

private _checkEditMode(){
  this.route.params.subscribe((params) => {
    if (params["id"]) {
      this.editMode = true;
      this.currentUserId = params["id"];
      this.usersService.getUser(params["id"]).subscribe((user:User) => {
        this.userForm["name"].setValue(user.name);
        this.userForm["email"].setValue(user.email);
        this.userForm["phone"].setValue(user.phone);
        this.userForm["isAdmin"].setValue(user.isAdmin);
        this.userForm["street"].setValue(user.street);
        this.userForm["apartment"].setValue(user.apartment);
        this.userForm["zip"].setValue(user.zip);
        this.userForm["city"].setValue(user.city);
        this.userForm["country"].setValue(user.country);
        this.userForm["password"].setValidators([]);
        this.userForm["password"].updateValueAndValidity();
      });
    }
  });

}

private _getCountries() {
  //  this.countries = this.usersService.getCountries();
  //  console.log(this._getCountries());
  //  console.log("countries");

}


get userForm(){
  return this.form.controls
}
onCancle() {
  this.location.back();
}



}
