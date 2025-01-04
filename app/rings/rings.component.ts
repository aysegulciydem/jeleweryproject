import { Component, CUSTOM_ELEMENTS_SCHEMA, Injectable, OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { products, Product } from '../products';
import { CommonModule} from '@angular/common';
import { ProductlistComponent } from '../productlist/productlist.component';
import { DataService } from '../service/data.service';


@Injectable()

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
    ProductlistComponent
  ],
  providers: [DataService],
  templateUrl: './rings.component.html',
  styleUrl: './rings.component.css',
})
export class RingsComponent  implements OnInit{
  products: Product[] = products;
  disabled = false;
  max = 100;
  min = 0;
  step = 1;
  thumbLabel = true;
  showTicks = true;
  value = 50;
  cartItemCount = 0;
  selectedProduct: Product | null = null;     

  constructor(
    private dataService: DataService
  ) {
    this.products.forEach(product => {
      product.currentImage = product.imageUrl[0];
    });

  }
  ngOnInit(): void {
    this.products = products.map((product) => ({
      ...product,
      currentImage: product.imageUrl[0],
    }))
    
  }
  selectProduct(product: Product): void {
    console.log(product);   
    //this.selectedProductId = id; // Seçilen ID'yi ayarla
    this.selectedProduct  = product;
    console.log(this.selectedProduct);
    this.dataService.setData(product);
    
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
  

