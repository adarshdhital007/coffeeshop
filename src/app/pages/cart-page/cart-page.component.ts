import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html'
})
export class CartPageComponent implements OnInit {
  cartItems: { [cupName: string]: { quantity: number; price: number } } = {};
  showPaymentForm: boolean = false;
  emailChanged: boolean=true;
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

  addToCart(cupName: string, price: number): void {
    this.cartService.addToCart(cupName, price);
  }

  getCartKeys(): string[] {
    return Object.keys(this.cartItems);
  }

  togglePaymentForm(): void {
    this.showPaymentForm = !this.showPaymentForm;
  }

  onEmailChange() {
    this.emailChanged = true;
  }

  submitPaymentForm(): void {
    if (this.fullName.trim() === '' || this.email.trim() === '') {
      window.alert("Can't proceed with either an empty name or email. Fill out the form.");
    } else {
      this.emailChanged = true;

      // Simulate a successful purchase
      this.purchaseSuccessful = true;

      // Clear the cart after a successful purchase
      this.cartService.clearCart();

      // Reset form and hide it
     this.showPaymentForm=false;
      // Now you can display the success message with the updated email
      console.log('Successfully Purchased! Email:', this.email);
    }
  }

}
