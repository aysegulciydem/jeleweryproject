import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { bracelets, earrings, necklaces, Product } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductlistserviceService {
  private basketItems = new BehaviorSubject<Product[]>([]);
  private favoriteItems = new BehaviorSubject<Product[]>([]);
  basketItems$ = this.basketItems.asObservable();  
  favoriteItems$ = this.favoriteItems.asObservable(); 
  itemCount$ = this.basketItems.asObservable().pipe(
    map(items => items.reduce((total, item) => total + item.quantity, 0))
  );
  constructor() {}
  initFavorites(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem('favorites');
      if (stored) {
        try {
          const parsed: Product[] = JSON.parse(stored);
          this.favoriteItems.next(parsed);
        } catch (e) {
          console.error('Favorites parse error', e);
          this.favoriteItems.next([]);
        }
      }
    }
  }
  addToBasket(product: Product) {
    let currentBasket = this.basketItems.getValue();
    let existingProduct = currentBasket.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      currentBasket.push({ ...product, quantity: 1 });
    }
    this.basketItems.next([...currentBasket]);
  }

  addToFavorite(product: Product) {
    let currentFavorite = this.favoriteItems.getValue();
    let existingFavorite = currentFavorite.find(p => p.id === product.id);
    if (!existingFavorite) {
      const newFavorites = [...currentFavorite, product];
      this.favoriteItems.next(newFavorites);

      // 🔒 Tarayıcıda çalışıyorsak kaydet
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
      }
    }
  }

  toggleFavorite(product: Product): void {
    const current = this.favoriteItems.getValue();
    const index = current.findIndex(p => p.id === product.id);
    if(index > -1){
      const updated = current.filter(p => p.id !== product.id); 
      this.favoriteItems.next(updated);
      localStorage.setItem('favorites', JSON.stringify(updated));
    }else{
      const updated = [...current, product];
      this.favoriteItems.next(updated);
      localStorage.setItem('favorites', JSON.stringify(updated));
    }
  }
    


  getBasketItems() {
    return this.basketItems.asObservable();
  }

  getFavoriteItems() {
    return this.favoriteItems.asObservable();
  }
  getFavoriteProducts(): Product[] {
   if (typeof window !== 'undefined' && window.localStorage) {
      const favorites = localStorage.getItem('favorites');
      return favorites ? JSON.parse(favorites) : [];
    }
    return [];
  }
  getEarrings(): Observable<Product[]> {
    return of(earrings);
  }
  getNecklaces() {
    return of(necklaces);
  }
  getBracelets() {
    return of(bracelets);
  }
  removeFromBasket(product: Product): void {
    const currentBasket = this.basketItems.getValue();
    const updatedBasket = currentBasket.filter(item => item.id !== product.id);
    this.basketItems.next(updatedBasket);
  }
  removeFromFavorite(productId: number): void {
    const updatedFavorites = this.favoriteItems.getValue().filter(item => item.id !== productId);
    this.favoriteItems.next(updatedFavorites);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
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
  isProductInFavorites(product: Product): boolean {
    const favorites = this.favoriteItems.getValue();
    return favorites.some((p: Product) => p.id === product.id);
  }
}
