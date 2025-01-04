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
import {MatToolbar} from "@angular/material/toolbar";
import {Router} from "@angular/router";
import {RingService} from "./ring.service";
import {Product} from "../../model/product";
import {products} from "../../products";
import {Constant} from "../../constants/contants";

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
export class RingsComponent{

  protected readonly Constant = Constant;

  products: any = products;
  value: any;
  cartItemCount: number = 0;
  noProducts: TemplateRef<NgIfContext<boolean>>;

  constructor(
    private readonly router: Router,
    private readonly ringService: RingService)
  {
    this.products.forEach(product => {
      product.currentImage = product.imageUrl[0];
    });
  }

  addToCard(product: Product): void {
    this.router.navigate(['productList'])
    this.ringService.setData(product);
  }

}
