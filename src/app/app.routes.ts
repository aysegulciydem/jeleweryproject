import { Routes } from "@angular/router";
import { CarouselComponent } from "./component/carousel/carousel.component";
import { RingsComponent } from "./pages/rings/rings.component";

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
        loadComponent: () => import ('./component/login/login.component').then(c => c.LoginComponent),
    },
    {
        'path' : 'carousel',
        component: CarouselComponent,
    },
    {
        'path': 'rings',
         component: RingsComponent,
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
        loadComponent: () => import('./pages/rings/productList/productList.component').then(c => c.ProductListComponent),
    },
    {
        'path': 'information',
        loadComponent: () => import('./component/information/information.component').then(c => c.InformationComponent),
    }
]

