import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Injectable, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {Subject} from 'rxjs';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { products, Product } from '../products';
import { CommonModule, NgIfContext } from '@angular/common';
import { BasketcardService } from '../services/basketcard.service';

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = $localize`First page`;
  itemsPerPageLabel = $localize`Items per page:`;
  lastPageLabel = $localize`Last page`;

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return $localize`Page 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return $localize`Page ${page + 1} of ${amountPages}`;
  }
}
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
  ],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
  templateUrl: './rings.component.html',
  styleUrl: './rings.component.css'
})
export class RingsComponent  implements OnInit{
  dataSource: any;
  products: Product[] = products;
  @Output() itemClicked = new EventEmitter<Product>();
  panelOpenState = false;
  max: any;
  disabled: any;
  min: any;
  step: any;
  thumbLabel: any;
  showTicks: any;
  value: any;
  cartItemCount: number = 0;
  basket: Product [] = [];
  router: any;
  product: any;
  noProducts: TemplateRef<NgIfContext<boolean>>;
   onItemClicked: any;
  constructor(private basketcardService: BasketcardService) {
    this.products.forEach(product => {
      product.currentImage = product.imageUrl[0];
    });
  }
  ngOnInit(): void {
    this.basketcardService.card$.subscribe(items => {
      this.cartItemCount = items.length;
    });
  }
  addToCard(product: Product): void {
    this.basketcardService.addToCardService(product);
    this.itemClicked.emit(product);
  }
  onMouseEnter(product: Product): void {
    // İkinci resmi göster
    product.currentImage = product.imageUrl[1];
  }
  onMouseLeave(product: Product): void {
    // İlk resmi geri yükle
    product.currentImage = product.imageUrl[0];
  }  
}
