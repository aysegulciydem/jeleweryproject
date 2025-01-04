import { Injectable } from '@angular/core';
import { Product } from '../products';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  
  private data: any;
  selectedProduct: any;
  setData(data:any){
    this.selectedProduct = data;
    console.log(data);
  }
  
  constructor() { }
   
  
  getData(): any{
    return this.selectedProduct;
 }
  
  
}
