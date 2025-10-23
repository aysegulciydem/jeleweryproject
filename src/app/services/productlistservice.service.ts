import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { bracelets, earrings, necklaces, Product } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductlistserviceService {

  // 🔹 1️⃣ Sepetteki ürünleri tutar
  private basketItems = new BehaviorSubject<Product[]>([]);

  // 🔹 2️⃣ Favorileri tutar
  private favoriteItems = new BehaviorSubject<Product[]>([]);

  // 🔹 3️⃣ Sepet listesini dinlemek isteyen bileşenler için observable
  basketItems$ = this.basketItems.asObservable();  

  // 🔹 4️⃣ Favori listesini dinlemek isteyen bileşenler için observable
  favoriteItems$ = this.favoriteItems.asObservable(); 

  // 🔹 5️⃣ 🟢 Badge için sepetteki toplam ürün sayısını hesaplar (en önemli kısım)
  // Yani her ürün eklendiğinde veya miktar değiştiğinde otomatik olarak yeniden hesaplanır.
  itemCount$ = this.basketItems.asObservable().pipe(
    map(items => items.reduce((total, item) => total + item.quantity, 0))
  );

  constructor() {}

  // 🟣 Ürün sepete eklenirse:
  addToBasket(product: Product) {
    let currentBasket = this.basketItems.getValue();
    let existingProduct = currentBasket.find(item => item.id === product.id);

    if (existingProduct) {
      // ürün zaten varsa miktarını artır
      existingProduct.quantity += 1;
    } else {
      // yoksa sepete ekle
      currentBasket.push({ ...product, quantity: 1 });
    }

    // 🔸 Değişiklik olduğunda BehaviorSubject’e yeni değer gönderiyoruz
    this.basketItems.next([...currentBasket]);
    // 🟢 Artık burada extra sayaç artırmaya gerek yok!
  }

  addToFavorite(product: Product) {
    let currentFavorite = this.favoriteItems.getValue();
    let existingFavorite = currentFavorite.find(p => p.id === product.id);

    if (!existingFavorite) {
      const newFavorites = [...currentFavorite, product];
      this.favoriteItems.next(newFavorites);
      console.log('Favorilere eklendi:', newFavorites);
    } else {
      alert('Product already added to favorite');
    }
  }

  getBasketItems() {
    return this.basketItems.asObservable();
  }

  getFavoriteItems() {
    return this.favoriteItems.asObservable();
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
