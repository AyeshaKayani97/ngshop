import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Order } from '../models/order';
import { map } from 'rxjs/operators';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  constructor(private http:HttpClient) { }

  // get all categories
  // getCategories():Observable<Category[]>{
  //   return this.http.get<Category[]>("http://localhost:5000/api/v1/categories");

  // }
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`http://localhost:5000/api/v1/orders`);
  }
  getOrder(orderId: string): Observable<Order> {
    return this.http.get<Order>(`http://localhost:5000/api/v1/categories/${orderId}`)

  }
  // getCategory(categoryId: string): Observable<Category> {
  //   return this.http.get<Category>(`${this.apiURLCategories}/${categoryId}`);
  // }
  createCategory(order:Order){
    return this.http.post<Order>("http://localhost:5000/api/v1/categories",order);

  }
  deleteOrder(orderId: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:5000/api/v1/categories/${orderId}`);
  }

  updateOrder(orderStaus: { status: string }, orderId: string): Observable<Order> {
    return this.http.put<Order>(`http://localhost:5000/api/v1/orders/${orderId}`, orderStaus);
  }

  getOrdersCount(): Observable<number> {
    return this.http
      .get<number>("http://localhost:5000/api/v1/orders//get/count")
      .pipe(map((objectValue: any) => objectValue.orderCount));
  }

  getTotalSales(): Observable<number> {
    return this.http
      .get<number>("http://localhost:5000/api/v1/orders/get/totalsales")
      .pipe(map((objectValue: any) => objectValue.totalsales));
  }


}
