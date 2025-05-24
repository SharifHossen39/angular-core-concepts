import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../store/cart.action';

@Component({
  selector: 'app-vegetables',
  standalone: true,
  imports: [],
  templateUrl: './vegetables.component.html',
  styleUrl: './vegetables.component.scss'
})

export class VegetablesComponent {

  constructor(
    public store: Store
  ){}

  addItem() {
    this.store.dispatch(addToCart({msg: 'Item Added succesfully'}));
  }

  removeItem() {
    this.store.dispatch(removeFromCart());
  }

}
