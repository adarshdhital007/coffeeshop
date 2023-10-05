import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html'
})
export class ListPageComponent implements OnInit {
  coffeeItems: {
    name: string;
    price: string;
    recipe: { name: string; quantity: number }[];
  }[] = [];

  constructor(
    private cartService: CartService,
    private coffeeService: CoffeeService
  ) {}

  ngOnInit(): void {
    this.coffeeService.getCoffeeItems().subscribe((data) => {
      this.coffeeItems = data;
    });
  }

  addToCart(cupName: string, price: string): void {
    this.cartService.addToCart(cupName, parseFloat(price));
  }


  getTotalPrice(): number {
    let totalPrice = 0;
    const cart = this.cartService.getCartValue();
    for (const cupName in cart) {
      if (cart.hasOwnProperty(cupName)) {
        totalPrice += cart[cupName].quantity * cart[cupName].price;
      }
    }
    return totalPrice;
  }
}
