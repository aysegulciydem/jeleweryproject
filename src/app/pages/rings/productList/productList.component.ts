import { Component, CUSTOM_ELEMENTS_SCHEMA, Input,  OnInit,  ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RingService} from "../ring.service";
import { Product } from '../../../model/products';
import {MatTableModule} from '@angular/material/table';





@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-productList',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  providers: [],
  templateUrl: './productList.component.html',
  styleUrl: './productList.component.css',
  
})

export class ProductListComponent {
  products: Product [] = [];
  public readonly data: Product;
  @Input() selectedProduct: Product;

  constructor(private readonly ringService: RingService){
    this.data = this.ringService.getData();
    this.products.push(this.data)
    console.log(this.products)
  }
  

  displayedColumns: string[] = ['id', 'name', 'price', 'imageUrl'];
  dataSource = this.products;
}
