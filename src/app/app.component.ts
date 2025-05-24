import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  cartCount$: Observable<number>;

  constructor(private readonly store: Store<{ cartCount: number }>) {
    this.cartCount$ = this.store.select('cartCount');
    console.log("CART", this.cartCount$);
  }
}
