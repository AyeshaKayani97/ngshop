import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterOutlet } from '@angular/router';
import { CategoriesService } from '@ngshop/products/services/categories.service';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@Component({
  standalone: true,
  imports: [NxWelcomeComponent,HttpClientModule,ToastModule,RouterOutlet, InputTextModule, CardModule, ToolbarModule,ButtonModule,TableModule, FormsModule, ReactiveFormsModule],
  providers:[CategoriesService,MessageService],
  selector: 'admin-root',
  templateUrl: './app.component.html'
  // styleUrls: ['/node_modules/quill/dist/quill.core.css']
})
export class AppComponent {
  title = 'admin';
}
