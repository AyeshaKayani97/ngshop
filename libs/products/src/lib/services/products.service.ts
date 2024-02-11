import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http: HttpClient) { }
// get all products 

getProducts(categoriesFilter?:string[]): Observable<Product[]>{
  let params = new HttpParams();
  if(categoriesFilter){
  params = params.append("categories",categoriesFilter.join(","));
  console.log(params);
  }
    return this.http.get<Product[]>("http://localhost:5000/api/v1/products",{params:params})

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

getProductsCount(): Observable<number> {
  return this.http
    .get<number>("http://localhost:5000/api/v1/products/get/count")
    .pipe(map((objectValue: any) => objectValue.productCount));
}

getFeaturdProducts(count:number):Observable<Product[]>{
  return this.http.get<Product[]>(`http://localhost:5000/api/v1/products/get/featured/${count}`)
}

}
