import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    const users = [
      {
        id: 1,
        name: 'Dishan',
        age: 29,
      },
      {
        id: 2,
        name: 'Shohan',
        age: 28,
      },
      {
        id: 3,
        name: 'Sharif',
        age: 27,
      },
    ];

    const messagePromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise resolved');
      }, 1000);
    });
    
    const users$ = of(users);
    const message$ = from(messagePromise);

    users$.subscribe((users: any) => {
      console.log('users', users);
    });

    message$.subscribe((msg) => {
      console.log('Message: ', msg);
    });
  }
}
