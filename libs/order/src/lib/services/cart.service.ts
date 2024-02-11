import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../model/Cart';
import { BehaviorSubject, Subject } from 'rxjs';


export const CART_KEY = "cart"
@Injectable({
  providedIn: 'root'
})
export class CartService {
  // BehaviorSubject should be initialized with new cart new BehaviorSubject(this.getCart())

  cart$:BehaviorSubject<Cart> = new BehaviorSubject(this.getCart())

  constructor() { }

  initCartLocalStorage (){
    
    const cart:Cart = this.getCart();
    // when there's no cart, initialize a new cart and add it to the local storage 
    if(!cart){
      const initialCart = {
        cartItems: []
      };
      const initialCartJson = JSON.stringify(initialCart);
      localStorage.setItem(CART_KEY,initialCartJson);

    }
    //when using BehaviorSubject, no need to write else part 
    // otherwise update the current subject which i am observing  with the cart which we found in the local storage 
    // else{
      
    //   this.cart$.next(cart);
    // }

  }

  getCart():Cart{
    const cartJsonString: string = localStorage.getItem(CART_KEY) || '{"items": []}';
    const cart:Cart = JSON.parse(cartJsonString)
    return cart;

  }

  setCartItem(cartItem:CartItem):Cart {
    const cart = this.getCart();
    if (!cart.cartItems) {
      cart.cartItems = []; // Ensure cartItems array exists
    }
    const  cartItemExist = cart.cartItems?.find(item =>item.productId === cartItem.productId)
    if(cartItemExist){
      cart.cartItems.forEach(item=>{
        if (item.productId === cartItem.productId && typeof item.quantity === 'number') {
          item.quantity += cartItem.quantity || 1;
        }
      
      })
    

    }else{
      cart.cartItems.push(cartItem);

    }
    // if (!cart) {
    //   return null; 
    // }

    const cartJson = JSON.stringify(cart);
    localStorage.setItem(CART_KEY,cartJson);
    this.cart$.next(cart);
    return cart

  }



}
