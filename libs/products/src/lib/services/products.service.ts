import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http: HttpClient) { }
// get all products 

getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:5000/api/v1/products")

}
getProduct(productId:string): Observable<Object>{
    return this.http.get<Object>(`http://localhost:5000/api/v1/products/${productId}`)

}
// create products 
// createProducts(productData:FormData){
// return this.http.post<Product>("http://localhost:5000/api/v1/products",productData)
// }
createProducts(productData: FormData): Observable<Product> {
  return this.http.post<Product>("http://localhost:5000/api/v1/products", productData);
}
deleteProduct(productId:string): Observable<Object>{
    return this.http.delete<Object>(`http://localhost:5000/api/v1/products/${productId}`)

}

// updateCategory(category:Category,){

//   return this.http.put<Object>(`http://localhost:5000/api/v1/categories/${category.id}`,category);


// }

}
