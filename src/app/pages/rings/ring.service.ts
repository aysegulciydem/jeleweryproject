import { Injectable } from '@angular/core';
import { Product } from '../../model/products';

@Injectable({
  providedIn: 'root'
})
export class RingService {
  private selectedProduct: Product;

  constructor() { }

  public setData(product: Product) {
    if (product) {
      this.selectedProduct = product;
      console.log(this.selectedProduct)
    } else {
      console.log('unsuccess')
    }
  }

  public getData() {
    return this.selectedProduct
  }

   
}