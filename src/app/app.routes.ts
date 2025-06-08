import { Routes } from "@angular/router";
import { CarouselComponent } from "./component/carousel/carousel.component";
import { RingsComponent } from "./pages/rings/rings.component";
import { EarringsComponent } from "./pages/earrings/earrings.component";
import { MultiCheckboxComponent } from "./component/multi-checkbox/multi-checkbox.component";
import { FavoriteComponent } from "./pages/favorite-page/favorite/favorite.component";
import { FavoritePageComponent } from "./pages/favorite-page/favorite-page.component";
import { AccountComponent } from "./pages/favorite-page/account/account.component";

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
        component: EarringsComponent,
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
    },
    {
        'path': 'multicheckbox',
        component: MultiCheckboxComponent,
    },
    {
        'path': 'favorite-page',
        component:FavoritePageComponent,
        children: [
            {
                'path': 'favorite',
                component: FavoriteComponent,
            },
            {
                'path': 'account',
                component: AccountComponent,
                
            }
            
        ]

    },
    






]

