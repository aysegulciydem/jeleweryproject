import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { RingsComponent } from "./rings/rings.component";
import { NecklacesComponent } from "./necklaces/necklaces.component";
import { EarringsComponent } from "./earrings/earrings.component";
import { BraceletComponent } from "./bracelet/bracelet.component";
import { HomeComponent } from "./home/home.component";
import { ProductlistComponent } from "./productlist/productlist.component";


export const routes: Routes = [
    {
        'path': '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        'path': 'home',
        component: HomeComponent,
        
    },
    {
        'path': 'login',
        component: LoginComponent,
    },
    {
        'path' : 'carousel',
        component: CarouselComponent,
    },
    {
        'path': 'rings',
        component: RingsComponent
    },
    {
        'path': 'necklaces', 
        component: NecklacesComponent,
    },
    {
        'path': 'earrings',
        component: EarringsComponent,
    },
    {
        'path': 'bracelet',
        component: BraceletComponent,
    },
    {
        'path': 'productlist',
        component: ProductlistComponent,
    }


    
]

