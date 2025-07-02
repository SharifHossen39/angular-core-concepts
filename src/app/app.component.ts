import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  cartItems$: Observable<any>;
  totalItem: number = 0;
  private readonly subscription: Subscription = new Subscription();

  constructor(private readonly store: Store<{ cartCount: number }>) {
    this.cartItems$ = this.store.select((state) => state.cart);
    this.totalItem$ = this.cartItems$.pipe(map((items) => items.length));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
