import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Injectable, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule, NgIfContext } from '@angular/common';
import { BasketcardService } from '../../services/basketcard.service';
import {MatToolbar} from "@angular/material/toolbar";
import {Constant} from "../../contants";
import {Router} from "@angular/router";
import {RingService} from "./ring.service";
import {Product} from "../../model/product";
import {products} from "../../products";

@Component({
  schemas: [(CUSTOM_ELEMENTS_SCHEMA)],
  selector: 'app-rings',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatDividerModule,
    CommonModule,
    MatToolbar,
  ],
  providers: [{provide: MatPaginatorIntl}],
  templateUrl: './rings.component.html',
  styleUrl: './rings.component.css'
})
export class RingsComponent  implements OnInit{

  protected readonly Constant = Constant;

  products: any = products;
  @Output() itemClicked = new EventEmitter<Product>();
  max: any;
  disabled: any;
  min: any;
  step: any;
  thumbLabel: any;
  showTicks: any;
  value: any;
  cartItemCount: number = 0;
  noProducts: TemplateRef<NgIfContext<boolean>>;
   onItemClicked: any;

  constructor(private basketCardService: BasketcardService, private readonly router: Router, private readonly ringService: RingService) {
    this.products.forEach(product => {
      product.currentImage = product.imageUrl[0];
    });
  }

  ngOnInit(): void {
    this.basketCardService.card$.subscribe(items => {
      this.cartItemCount = items.length;
    });
  }

  addToCard(product: Product): void {
    console.log(product);
    this.router.navigate(['productList', product])
    this.ringService.setData(product);
  }

}
