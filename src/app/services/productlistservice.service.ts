import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { earrings, Product } from '../model/products';


@Injectable({
  providedIn: 'root'
})
export class ProductlistserviceService {
  private basketItems= new BehaviorSubject<Product[]>([]);
  basketItems$ = this.basketItems.asObservable();  
  itemCount$ = this.basketItems.asObservable().pipe(
    map(items => items.reduce((total, item) => total + item.quantity, 0)) 
  );

  constructor() { }
  addToBasket(product: Product){
   let currentBasket= this.basketItems.getValue();
   let existingProduct = currentBasket.find(item => item.id === product.id);
   if(existingProduct){
    existingProduct.quantity+=1;
   }else{
    currentBasket.push({...product,quantity:1});
   }
   this.basketItems.next([...currentBasket]);
  }
  getBasketItems() {
    return this.basketItems.asObservable(); // Komponentler buradan veriyi alır
  }
  getEarrings(): Observable<Product[]> {
    return of(earrings); // earrings arrayını observable olarak döndür
  }
  removeFromBasket(product: Product): void {
    const currentBasket = this.basketItems.getValue();
    const updatedBasket = currentBasket.filter(item => item.id !== product.id);
    this.basketItems.next(updatedBasket);
  }
  updateBasketItem(updatedItem: Product) {
    const currentBasket = this.basketItems.getValue();
    const updatedBasket = currentBasket.map(item =>
      item.id === updatedItem.id
        ? { ...item, quantity: updatedItem.quantity }
        : item
    );
    this.basketItems.next(updatedBasket);
  }
  
}
