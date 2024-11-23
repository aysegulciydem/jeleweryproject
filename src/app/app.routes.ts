import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { RingsComponent } from "./rings/rings.component";
import { NecklacesComponent } from "./necklaces/necklaces.component";
import { EarringsComponent } from "./earrings/earrings.component";
import { BraceletComponent } from "./bracelet/bracelet.component";


export const routes: Routes = [
    {
        'path': '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        'path': 'home',
        loadComponent: () => import ('./home/home.component').then(c => c.HomeComponent),
        
    },
    {
        'path': 'login',
        loadComponent: () => import ('./login/login.component').then(c => c.LoginComponent),
    },
    {
        'path' : 'carousel',
        component: CarouselComponent,
    },
    {
        'path': 'rings',
        loadComponent: () => import ('./rings/rings.component').then(c => c.RingsComponent),
    },
    {
        'path': 'necklaces', 
        loadComponent: () => import ('./necklaces/necklaces.component').then(c => c.NecklacesComponent),
    },
    {
        'path': 'earrings',
        loadComponent: () => import ('./earrings/earrings.component').then( c => c.EarringsComponent),
    },
    {
        'path': 'bracelet',
        loadComponent: () => import ('./bracelet/bracelet.component').then ( c => c.BraceletComponent),
    },
    {
        'path': 'productlist',
        loadComponent: () => import ('./productlist/productlist.component').then ( c => c.ProductlistComponent),
    }


    
]

