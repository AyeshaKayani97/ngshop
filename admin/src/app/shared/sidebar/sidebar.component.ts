import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from 'libs/users/src/lib/services/auth.service';


@Component({
  selector: 'admin-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  constructor(
    private authService:AuthService
  ){}


  logoutUser(){
    this.authService.logout()
  }
}
