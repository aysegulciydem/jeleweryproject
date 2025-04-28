import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ProductEarring } from '../model/products';
@Injectable({
  providedIn: 'root'
})
export class EarringsService {
  private basketItems= new BehaviorSubject<ProductEarring[]>([]);
  basketItems$ = this.basketItems.asObservable();
  basketSubject: any;
   
  itemCount$ = this.basketItems.asObservable().pipe(
    map(items => items.reduce((total, item) => total + item.quantity, 0)) 
  );

  constructor() { }
  addToBasket(productEarring: any){
   let currentBasket= this.basketItems.getValue();
   let existingProduct = currentBasket.find(item => item.id === productEarring.id);
   if(existingProduct){
    existingProduct.quantity+=1;
   }else{
    currentBasket.push({...productEarring,quantity:1});
   }
   this.basketItems.next([...currentBasket]);

  }
  getBasketItems() {
    return this.basketItems.asObservable(); // Komponentler buradan veriyi alır
  }
  removeFromBasket(productEarring: ProductEarring): void {
    const currentBasket = this.basketItems.getValue();
    const updatedBasket = currentBasket.filter(item => item.id !== productEarring.id);
    this.basketItems.next(updatedBasket);
  }
  updateBasketItem(updatedItem: ProductEarring) {
    const currentBasket = this.basketItems.getValue();
    const updatedBasket = currentBasket.map(item =>
      item.id === updatedItem.id
        ? { ...item, quantity: updatedItem.quantity }
        : item
    );
    this.basketItems.next(updatedBasket);
  }
  
}
