import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: { [cupName: string]: { quantity: number; price: number } } = {};
  private cartSubject: BehaviorSubject<{ [cupName: string]: { quantity: number; price: number } }> = new BehaviorSubject<{ [cupName: string]: { quantity: number; price: number } }>({});

  constructor() { }

  addToCart(cupName: string, price: number): void {
    if (this.cart[cupName]) {
      this.cart[cupName].quantity += 1;
    } else {
      this.cart[cupName] = { quantity: 1, price };
    }
    this.cartSubject.next({ ...this.cart });
  }

  removeFromCart(cupName: string): void {
    if (this.cart[cupName]) {
      this.cart[cupName].quantity -= 1;
      if (this.cart[cupName].quantity <= 0) {
        delete this.cart[cupName];
      }
      this.cartSubject.next({ ...this.cart });
    }
  }

  getCart(): Observable<{ [cupName: string]: { quantity: number; price: number } }> {
    return this.cartSubject.asObservable();
  }

  getCartValue(): { [cupName: string]: { quantity: number; price: number } } {
    return { ...this.cart };
  }

  clearCart(): void {
    this.cart = {};
    this.cartSubject.next({});
  }
}
