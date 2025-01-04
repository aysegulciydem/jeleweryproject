import { Routes } from "@angular/router";
import { CarouselComponent } from "./component/carousel/carousel.component";
import {HomeComponent} from "./pages/home.component";

export const routes: Routes = [
    {
        'path': '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        'path': 'home',
        loadComponent: () => import ('./pages/home.component').then(c => c.HomeComponent),

    },
    {
        'path': 'login',
        loadComponent: () => import ('./pages/login/login.component').then(c => c.LoginComponent),
    },
    {
        'path' : 'carousel',
        component: CarouselComponent,
    },
    {
        'path': 'rings',
        loadComponent: () => import ('./pages/rings/rings.component').then(c => c.RingsComponent),
    },
    {
        'path': 'necklaces',
        loadComponent: () => import ('./pages/necklaces/necklaces.component').then(c => c.NecklacesComponent),
    },
    {
        'path': 'earrings',
        loadComponent: () => import ('./pages/earrings/earrings.component').then(c => c.EarringsComponent),
    },
    {
        'path': 'bracelet',
        loadComponent: () => import ('./pages/bracelet/bracelet.component').then (c => c.BraceletComponent),
    },
    {
        'path': 'productList',
        loadComponent: () => import ('./pages/rings/productlist/productlist.component').then (c => c.ProductlistComponent),
    }
]

