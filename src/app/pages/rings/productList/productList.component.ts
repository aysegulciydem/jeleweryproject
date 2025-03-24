import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../model/products';
import {MatTableModule} from '@angular/material/table';
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatFormField} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import { ProductlistserviceService } from '../../../services/productlistservice.service';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-productList',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCard, MatIcon, MatFormField, FormsModule, MatIconButton, MatInput],
  providers: [],
  templateUrl: './productList.component.html',
  styleUrl: './productList.component.css',
})

export class ProductListComponent implements OnInit{
  public data: Product;
  public products: Product [] = [];
  public count: number = 1;
  public price: number = 0;
  constructor(private readonly productlistservice: ProductlistserviceService){}
  basketItems: any[]=[];
  ngOnInit(): void {
   this.productlistservice.getBasketItems().subscribe(items=> {
    this.basketItems= items; //update basket
   })
  }

  public increase(item: Product): void {
    this.count++;
    this.calculatePriceOfProduct(item, 'increase')
  }

  public decrease(item: Product): void {
    this.count--;
    this.calculatePriceOfProduct(item, 'decrease')
  }

  private calculatePriceOfProduct(item: Product, action: string): void {
    if (action === 'increase') {
      this.price = item.price * this.count;
    } else {
      this.price = this.price - item.price;
    }
  }


}
