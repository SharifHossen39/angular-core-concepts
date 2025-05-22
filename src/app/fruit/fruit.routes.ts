import { Routes } from "@angular/router";


const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./fruits/fruits.component').then(x => x.FruitsComponent),
    },
    {
        path: 'details',
        loadComponent: () => import('./fruit-deatils/fruit-deatils.component').then(x=>x.FruitDeatilsComponent),
    }
]

export default routes;