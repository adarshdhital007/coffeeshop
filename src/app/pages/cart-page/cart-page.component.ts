import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html'
})
export class CartPageComponent implements OnInit {
  cartItems: { [cupName: string]: { quantity: number; price: number } } = {};
  showPaymentForm: boolean = false;
  fullName: string = '';
  email: string = '';
  purchaseSuccessful: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart) => {
      this.cartItems = { ...cart };
    });
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    for (const cupName in this.cartItems) {
      if (this.cartItems.hasOwnProperty(cupName)) {
        totalPrice += this.cartItems[cupName].quantity * this.cartItems[cupName].price;
      }
    }
    return totalPrice;
  }

  removeFromCart(cupName: string): void {
    this.cartService.removeFromCart(cupName);
  }

  addToCart(cupName: string,price:number): void {
    this.cartService.addToCart(cupName,price);
  }
  
  getCartKeys(): string[] {
    return Object.keys(this.cartItems);
  }

  togglePaymentForm(): void {
    this.showPaymentForm = !this.showPaymentForm;
  }

  submitPaymentForm(): void {
    if (this.fullName.trim() === '' || this.email.trim() === '') {
      window.alert("Can't proceed with empty name and email. Fill out the form.");
    } else {
      // Simulate a successful purchase
      this.purchaseSuccessful = true;

      // Clear the cart after a successful purchase
      this.cartService.clearCart();

      // Reset form and hide it
      this.fullName = '';
      this.email = '';
      this.showPaymentForm = false;

      console.log('Successfully Purchased!');
    }
  }
}
