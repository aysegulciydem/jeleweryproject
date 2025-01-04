import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HomeComponent } from './pages/home.component';
import { RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { NecklacesComponent } from './pages/necklaces/necklaces.component';
import { RingsComponent } from './pages/rings/rings.component';
import { EarringsComponent } from './pages/earrings/earrings.component';
import { BraceletComponent } from './pages/bracelet/bracelet.component';
import { CommonModule } from '@angular/common';
import { BasketcardService } from './services/basketcard.service';
import { ProductlistComponent } from './pages/rings/productlist/productlist.component';
import { Product } from './products';

@Component({
  schemas: [(CUSTOM_ELEMENTS_SCHEMA)],
  selector: 'app-root',
  standalone: true,
  providers: [BasketcardService],
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
  imports: [
    HomeComponent,
    RouterModule,
    ],
})

export class AppComponent  {
onItemClicked($event: Product) {
throw new Error('Method not implemented.');
}
productList: Product[];
products: any;
  constructor(){}


}

