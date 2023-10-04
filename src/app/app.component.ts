import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'coffee-app';
  cartQuantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Subscribe to cart updates
    this.cartService.getCart().subscribe((cart) => {
      this.cartQuantity = this.calculateCartQuantity(cart);
    });
  }

  calculateCartQuantity(cart: { [cupName: string]: { quantity: number; price: number } }): number {
    let totalQuantity = 0;
    for (const cupName in cart) {
      if (cart.hasOwnProperty(cupName)) {
        totalQuantity += cart[cupName].quantity;
      }
    }
    return totalQuantity;
  }
}
