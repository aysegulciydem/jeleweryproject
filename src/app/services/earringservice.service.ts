import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { productEarring, ProductEarring } from '../model/products';
@Injectable({
  providedIn: 'root'
})
export class EarringsService {
  private readonly productEarring: ProductEarring[] = productEarring;
  private earringItems= new BehaviorSubject<ProductEarring[]>(productEarring);
  earringItems$ = this.earringItems.asObservable();
  itemCount$ = this.earringItems.asObservable().pipe(
    map(items => items.reduce((total, item) => total + item.quantity, 0)) 
  );

  constructor() { }
  addToBasket(earring: any){
   let currentEarring= this.earringItems.getValue();
   let existingProduct = currentEarring.find(item => item.id === earring.id);
   if(existingProduct){
    existingProduct.quantity+=1;
   }else{
    currentEarring.push({...earring,quantity:1});
   }
   this.earringItems.next(currentEarring);

  }
  getEarringItems(){
    return this.earringItems.asObservable();
  }
  removeFromBasket(productEarring: ProductEarring): void {
    const currentEarring = this.earringItems.getValue();
    const updatedBasket = currentEarring.filter(item => item.id !== productEarring.id);
    this.earringItems.next(updatedBasket);
  }
  updateEarringItem(updatedItem: ProductEarring) {
    const currentEarring = this.earringItems.getValue();
    const updatedBasket = currentEarring.map(item =>
      item.id === updatedItem.id
        ? { ...item, quantity: updatedItem.quantity }
        : item
    );
    this.earringItems.next(updatedBasket);
  }
  
}
