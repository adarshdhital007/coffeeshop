import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { CoffeeService } from 'src/app/coffee.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit {
  coffeeItems: {
    name: string;
    price: string;
    cssClass: string;
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
