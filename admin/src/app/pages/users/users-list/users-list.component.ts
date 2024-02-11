import { Component,OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { User } from '@ngshop/products/models/user';
import { UsersService } from '@ngshop/products/services/users.service';
import { ToastModule } from 'primeng/toast';
import { MessageService,ConfirmationService } from 'primeng/api';
// import { Location } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Router } from '@angular/router';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'ngshop-users-list',
  standalone: true,
  imports: [CardModule,ToolbarModule,ButtonModule,TableModule,ToastModule,ConfirmDialogModule,TagModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  users:User[] = [];

  constructor(private usersService:UsersService,private messageService:MessageService,private confirmationService:ConfirmationService,private router:Router){}
  ngOnInit():void{
    this._getUsers();

  }
  updateUser(userId:string){
    this.router.navigateByUrl(`users/form/${userId}`)
  }



  // Get users 
  private _getUsers(){
    this.usersService.getUsers().subscribe(users=>{
      this.users = users;
    })
  }
  //Delete user

  
  deleteUser(userId: string) {
    this.confirmationService.confirm({
      message: 'Do you want to Delete this user?',
      header: 'Delete Category',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.usersService.deleteUser(userId).subscribe(
          () => {
            this._getUsers();
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'User is deleted!'
            });
          },
          () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'User is not deleted!'
            });
          }
        );
      }
    });
  }
  
}
