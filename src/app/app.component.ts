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
  cartCount$: Observable<number>;
  totalItem: number = 0;
   private readonly subscription: Subscription = new Subscription();

  constructor(private readonly store: Store<{ cartCount: number }>) {
    this.cartCount$ = this.store.select('cartCount');
    this.subscription.add(
      this.cartCount$.subscribe((count) => {
        this.totalItem++;
        console.log('CART', this.totalItem);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
