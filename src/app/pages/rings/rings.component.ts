import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  TemplateRef
} from '@angular/core';
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
import {Product, products} from "../../model/products";
import {Constant} from "../../constants/contants";
import {MatDialog} from "@angular/material/dialog";
import {ProductDetailDialogComponent} from "./product-detail-dialog/product-detail-dialog.component";
import { ProductlistserviceService } from '../../services/productlistservice.service';

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
  noProducts: TemplateRef<NgIfContext<boolean>>;

  constructor(
    private readonly matDialog: MatDialog,
    private readonly router: Router,
    private readonly productlistservice: ProductlistserviceService,
  )
  {
    this.products.forEach(product => {
      product.currentImage = product.imageUrl[0];
    });
  }
  addToCard(product: Product): void {
    this.productlistservice.addToBasket(product);
    const goToCart = confirm("Product added to basket! Would you like to go to basket?");
    if(goToCart) {
      this.router.navigate(['/productList']);
    }
  }

  openProductDetailDialogComponent(product: Product): void {
    this.matDialog.open(ProductDetailDialogComponent,
      {
        data: product,
        disableClose: true
      }
    );
  }
}
