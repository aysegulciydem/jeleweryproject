import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { productEarring, ProductEarring } from '../model/products';
@Injectable({
  providedIn: 'root'
})
export class EarringsService {
  private readonly productEarring: ProductEarring[] = productEarring;
  private earringItems= new BehaviorSubject<ProductEarring[]>([]);
  earringItems$ = this.earringItems.asObservable();
  itemCount$ = this.earringItems.asObservable().pipe(
    map(items => items.reduce((total, item) => total + item.quantity, 0)) 
  );

  constructor() { }
  addToBasket(product: ProductEarring){
   let currentEarring= this.earringItems.getValue();
   let existingProduct = currentEarring.find(item => item.id === product.id);
   if(existingProduct){
    existingProduct.quantity+=1;
   }else{
    currentEarring.push({...product,quantity:1});
   }
   this.earringItems.next([...currentEarring]);

  }
  getEarringItems(): Observable<ProductEarring[]> {
    return of(productEarring).pipe(
      map(items =>
        items.map(item => ({
          ...item,
          currentImage: item.imageUrl[0]
        }))
      )
    );
  }
  removeFromBasket(product: ProductEarring): void {
    const currentEarring = this.earringItems.getValue();
    const updatedBasket = currentEarring.filter(item => item.id !== product.id);
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
