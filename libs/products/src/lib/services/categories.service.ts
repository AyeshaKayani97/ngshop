import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  constructor(private http:HttpClient) { }

  // get all categories
  // getCategories():Observable<Category[]>{
  //   return this.http.get<Category[]>("http://localhost:5000/api/v1/categories");

  // }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>("http://localhost:5000/api/v1/categories");
  }
  getCategory(categoryId: string): Observable<Category> {
    return this.http.get<Category>(`http://localhost:5000/api/v1/categories/${categoryId}`)

  }
  // getCategory(categoryId: string): Observable<Category> {
  //   return this.http.get<Category>(`${this.apiURLCategories}/${categoryId}`);
  // }
  createCategory(category:Category){
    return this.http.post<Category>("http://localhost:5000/api/v1/categories",category);

  }
  deleteCategory(categoryId:string):Observable<Object>{
    return this.http.delete<Object>(`http://localhost:5000/api/v1/categories/${categoryId}`);

  }
  updateCategory(category:Category,){

    return this.http.put<Object>(`http://localhost:5000/api/v1/categories/${category.id}`,category);


  }
}
