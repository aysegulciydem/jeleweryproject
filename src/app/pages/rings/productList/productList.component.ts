import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RingService} from "../ring.service";
import {Product} from "../../../model/product";

@Component({
  selector: 'app-productList',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './productList.component.html',
  styleUrl: './productList.component.css'
})

export class ProductListComponent {

  private readonly data: Product | void

  constructor(private readonly ringService: RingService){
    this.data = this.ringService.getData();
    console.log(this.data)
  }
}
