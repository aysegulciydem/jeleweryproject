import { Injectable } from '@angular/core';
import { Product } from '../products';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class BasketcardService { 
  private product: any [] = [];
  private cardItems : Product[] = [];
  private cardSubject  = new BehaviorSubject<Product []>([]);
  card$ = this.cardSubject.asObservable();

 
  constructor(){}

  //Ürünleri sepete ekleme
  addToCardService(product: Product){
    const existingProduct = this.cardItems.find(item => item.name === product.name);
    if (!existingProduct) {
      this.cardItems.push(product);
      this.cardSubject.next([...this.cardItems]); // BehaviorSubject'i güncelle
      console.log('Ürün sepete eklendi:', this.cardItems);
    }
    
  }

  // sepetin içeriğini döndüren metot 
  getCardItems(): Product[]{
    return [...this.cardItems];
  }
  clearCart(): void {
    this.cardItems = [];
    this.cardSubject.next([...this.cardItems]); // Sepeti güncelle
    console.log('Sepet temizlendi');
  }

}
