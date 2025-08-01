import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { ProductlistserviceService } from '../../../services/productlistservice.service';
import { Product } from '../../../model/products';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Location } from '@angular/common';
import { Constant } from '../../../constants/contants';

@Component({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    selector: 'app-favorite',
    imports: [CommonModule, MatCheckboxModule, MatButtonModule, MatDividerModule, MatIconModule],
    templateUrl: './favorite.component.html',
    styleUrl: './favorite.component.css'
})
export class FavoriteComponent implements OnInit {
  favoriteItems: Product[]=[]; 
  Constant = Constant;
 
  constructor(
    private readonly productlistservice: ProductlistserviceService,
    private  location: Location,
  ){}
  ngOnInit(): void {
    this.productlistservice.getFavoriteItems().subscribe(items => { 
      this.favoriteItems= items;
    })
  }
  removeProductFromFavorite(product: Product): void {
    this.productlistservice.removeFromFavorite(product.id!);
  } 
  backToPage(): void {
     this.location.back();
  }
}
