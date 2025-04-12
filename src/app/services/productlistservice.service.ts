import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductlistserviceService {
  


  private basketItems= new BehaviorSubject<Product[]>([]);
  basketSubject: any;
  constructor() { }
  addToBasket(product: any){
   let currentBasket= this.basketItems.getValue();
   let existingProduct = currentBasket.find(item => item.id === product.id);
   if(existingProduct){
    existingProduct.quantity+=1;
   }else{
    currentBasket.push({...product,quantity:1});
   }
   this.basketItems.next(currentBasket);

   
  }
  getBasketItems() {
    return this.basketItems.asObservable(); // Komponentler buradan veriyi alır
  }
  removeFromBasket(product: Product): void {
    const currentBasket = this.basketItems.getValue();
    const updatedBasket = currentBasket.filter(item => item.id !== product.id);
    this.basketItems.next(updatedBasket);
  }
  
}
