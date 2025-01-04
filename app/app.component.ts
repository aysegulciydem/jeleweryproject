import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { HomeComponent } from './home/home.component';
import {  RouterModule, RouterOutlet} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { NecklacesComponent } from './necklaces/necklaces.component';
import { RingsComponent } from './rings/rings.component';
import { EarringsComponent } from './earrings/earrings.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';
import { Product } from './products';
import { DataService } from './service/data.service';

@Component({
  schemas: [(CUSTOM_ELEMENTS_SCHEMA)],
  selector: 'app-root',
  standalone: true,
  providers: [DataService],
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
  imports: [
    HomeComponent, 
    RouterModule,
    NavbarComponent, 
    RouterOutlet,  
    LoginComponent, 
    CommonModule, 
    RingsComponent, 
    NecklacesComponent,
    EarringsComponent,
    BraceletComponent,
    ProductlistComponent,
    
  ],
})

export class AppComponent  {
  
  productList: Product[];
  products: any;
  constructor(){}
  
  
}

