import { Component, CUSTOM_ELEMENTS_SCHEMA, Input,  OnInit,  ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RingService} from "../ring.service";
import { Product } from '../../../model/products';
import {MatTableModule} from '@angular/material/table';
import {CdkTableDataSourceInput} from "@angular/cdk/table";
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatFormField} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";





@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-productList',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCard, MatIcon, MatFormField, FormsModule, MatIconButton, MatInput],
  providers: [],
  templateUrl: './productList.component.html',
  styleUrl: './productList.component.css',

})

export class ProductListComponent {

  @Input() selectedProduct: Product;

  public readonly data: Product;
  public products: Product [] = [];

  constructor(private readonly ringService: RingService)
  {
    this.data = this.ringService.getData();
    if (this.data) {
      this.products.push(this.data)
    }
  }

  count: number = 0;
  price: number;

  increase(item: Product) {
    this.count++;
    this.price = item.price * this.count;
  }

  decrease(item: Product) {
    if (this.count > 0) {
      this.count--;
      this.price = this.price - item.price;
    }
  }


}
