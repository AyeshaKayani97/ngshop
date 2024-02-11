import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule , ReactiveFormsModule, Validators, } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { CommonModule,Location } from '@angular/common';
// import { UsersService } from '@ngshop/products/services/users.service';
import { AuthService } from '@ngshop/products/services/auth.service';
import { LocalstorageService } from '@ngshop/products/services/localstorage.service';
import { User } from '@ngshop/products/models/user';
// import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'ngshop-login',
  standalone: true,
  imports: [CardModule,ToolbarModule,ButtonModule,InputTextModule,ToastModule,CommonModule,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  isSubmitted:boolean = false;
  // loginForm!:FormGroup
  loginFormGroup!: FormGroup;


  authError:boolean= false;
  authMessage:string = 'Email or Password are wrong';
  constructor (
    private formBuilder:FormBuilder,
    // private usersService:UsersService,
    private auth:AuthService,
    private localstorageService:LocalstorageService,
    private router:Router
    
    
    ){}

  ngOnInit():void{
    this._initLoginForm()
  }

  private _initLoginForm() {
    this.loginFormGroup = this.formBuilder.group({
       email: ['', [Validators.required, Validators.email]],
       password: ['', Validators.required]
    })
 }

  // Onsubmit
  onSubmit() {
    this.isSubmitted = true;
    if(this.loginFormGroup.invalid) return;

    const user = {
      name: this.LoginFormControls["email"].value,
      password: this.LoginFormControls["password"].value
   }

    this.auth.login(user.name,user.password).subscribe(
      (user:any)=>{
        console.log(user, "users")
        this.authError = false;
        // this.localstorageService.setToken(users.token)
        this.localstorageService.setToken(user.token);
        this.router.navigate(['/']);

      },
      (error:HttpErrorResponse)=>{
        this.authError= true
        if(error.status !==400){
          this.authMessage = "Error in the server.Try again!"
        }
        
      }
    
    
    
    )




  }



  
  get LoginFormControls() {
    return this.loginFormGroup.controls;
  }

}
