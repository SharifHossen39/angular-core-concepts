import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../store/cart.action';

@Component({
  selector: 'app-vegetables',
  standalone: true,
  imports: [],
  templateUrl: './vegetables.component.html',
  styleUrl: './vegetables.component.scss',
})
export class VegetablesComponent {
  constructor(public store: Store) {}

  addItem(id: number, vegName: string, price: number) {
    this.store.dispatch(
      addToCart({
        item: {
          id: id,
          name: vegName,
          price: price,
          quantity: 1,
        },
      })
    );
  }

  removeItem(id: number, vegName: string, price: number) {
    this.store.dispatch(
      removeFromCart({
        id: id,
      })
    );
  }
}
