import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../../store/cart.action';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss'
})

export class FruitsComponent {

  constructor(public store: Store) {

  }
  
  addItem() {
    this.store.dispatch(addToCart({msg: 'Item Added succesfully'}));
  }

  removeItem() {
    this.store.dispatch(removeFromCart());
  }

}
