import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'vegetables',
        loadComponent: () => import('./vegetables/vegetables.component').then(x=>x.VegetablesComponent),
    },
    {
        path: '',
        children: [
            {
                path: 'fruits',
                loadChildren: () => import('../app/fruit/fruit.routes'),
            },
        ]
    }
];
