import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../../store/cart.action';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss',
})
export class FruitsComponent {
  constructor(public store: Store) {}

  addItem(id: number, name: string, price: number) {
    this.store.dispatch(
      addToCart({
        item: {
          id: id,
          name: name,
          price: price,
          quantity: 1,
        },
      })
    );
  }

  removeItem(id: number, name: string, price: number) {
    this.store.dispatch(
      removeFromCart({
        id: id,
      })
    );
  }
}
