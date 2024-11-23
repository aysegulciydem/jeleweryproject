import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { NecklacesComponent } from './necklaces/necklaces.component';
import { RingsComponent } from './rings/rings.component';
import { EarringsComponent } from './earrings/earrings.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { CommonModule } from '@angular/common';
import { BasketcardService } from './services/basketcard.service';
import { ProductlistComponent } from './productlist/productlist.component';
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
    NavbarComponent, 
    RouterOutlet, 
    RouterLink, 
    LoginComponent, 
    CommonModule, 
    RingsComponent, 
    NecklacesComponent,
    EarringsComponent,
    BraceletComponent,
    ProductlistComponent],
})

export class AppComponent  {
onItemClicked($event: Product) {
throw new Error('Method not implemented.');
}
productList: Product[];
products: any;
  constructor(){}
  
  
}

