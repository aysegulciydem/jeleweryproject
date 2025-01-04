import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RingsComponent } from '../rings.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BasketcardService } from '../../../services/basketcard.service';
import {ActivatedRoute} from "@angular/router";
import {RingService} from "../ring.service";
import {Product} from "../../../model/product";

@Component({
  schemas: [(CUSTOM_ELEMENTS_SCHEMA)],
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule, RingsComponent, MatTableModule,MatCheckboxModule],
  providers: [BasketcardService],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})

export class ProductlistComponent {

  private data: Product | void

  constructor(private readonly ringService: RingService){
    this.data = this.ringService.getData();
    console.log(this.data)
  }
}
