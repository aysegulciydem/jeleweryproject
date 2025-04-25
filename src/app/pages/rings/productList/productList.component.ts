import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../model/products';
import {MatTableModule} from '@angular/material/table';
import {MatCard} from "@angular/material/card";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatInput, MatInputModule} from "@angular/material/input";
import { ProductlistserviceService } from '../../../services/productlistservice.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { Location } from '@angular/common';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-productList',
  standalone: true,
  imports: [ MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule, 
    MatTableModule,
    MatCard, 
    MatIcon,
    MatFormField, 
    FormsModule, 
    MatIconButton, 
    MatInput,
    MatButtonModule],
  providers: [],
  templateUrl: './productList.component.html',
  styleUrl: './productList.component.css',
})

export class ProductListComponent implements OnInit{
  public data: Product;
  public products: Product [] = [];
  public count: number = 1;
  public price: number = 0;
  public shipping: number= 4.90;
  constructor(private readonly productlistservice: ProductlistserviceService,
    private  location: Location
  ){
    
  }
  basketItems: any[]=[];
  ngOnInit(): void {
   this.productlistservice.getBasketItems().subscribe(items=> {
    this.basketItems= items; //update basket
   })
  }

  public increase(item: Product): void {
    item.quantity = (item.quantity || 1) + 1;
    this.productlistservice.updateBasketItem(item);
  }
  
  public decrease(item: Product): void {
    if (item.quantity && item.quantity > 1) {
      item.quantity--;
      this.productlistservice.updateBasketItem(item);
    }
  }
  
  getSubtotal(): number {
    return this.basketItems.reduce((total, item) => {
      const quantity = item.quantity || 1;
      return total + (item.price * quantity);
    }, 0);
  }
   
  
  getShipping(): number {
    console.log(this.shipping);
    return this.shipping;  
  }
   getTotal(): number {
    return (this.getSubtotal() + this.shipping);
   }

  continueShopping(): void {
     this.location.back();
  }
  removeItemFromBasket(item: Product): void {
    this.productlistservice.removeFromBasket(item);
  }
  

}
