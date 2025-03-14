import { Component, ViewChild, ElementRef, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarouselComponent } from '../component/carousel/carousel.component';
import {NavbarComponent} from "../component/navbar/navbar.component";
import {Constant} from "../constants/contants";
import {  DiscountSliderImages, SliderImages } from '../../asset/images/images';
import { DiscountcarouselComponent } from '../component/discountcarousel/discountcarousel.component';
import { RingsComponent } from './rings/rings.component';

@Component({
   schemas: [CUSTOM_ELEMENTS_SCHEMA,],
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterModule, NavbarComponent, MatCardModule, MatButtonModule, MatDividerModule, 
      CommonModule, CarouselComponent, DiscountcarouselComponent,RingsComponent]
})
export class HomeComponent {
  
  images: SliderImages[]= [
    { id:1, src:'https://mp-cdn-prod.beymen.com/seller-portal/a0b802f2-6ef4-44ed-92e8-0c2e318305e4/542084d4-5131-4343-9ab0-a291f8c3faec.jpg', alt: 'slider1'},
    { id:2, src:'https://www.nevjewellery.com/Data/BlockUploadData/banner/img1/344/7-4-en.png?1710941122', alt: 'slider2'},
    { id:3, src:'https://www.nevjewellery.com/Data/BlockUploadData/banner/img1/349/p-rlanta-3-en.jpg?1701170598', alt: 'slider3'},
    { id:4, src:'https://www.nevjewellery.com/Data/BlockUploadData/banner/img1/349/6-pirlanta-bileklikler-4-en.jpg?1701170631', alt: 'slider4'},
    { id:5, src:'https://www.nevjewellery.com/Data/BlockUploadData/banner/img1/345/1-5-en.png?1699346039', alt: 'slider5'},
  ]
  discountslide: DiscountSliderImages[] = [
    {id:1, src:'https://nevjewellery.com/Data/EditorFiles/anasayfa-gorsel/bilezik_bileklik.jpg', alt:'discount1'},
    {id:2, src:'https://nevjewellery.com/Data/EditorFiles/anasayfa-gorsel/kolye.jpg', alt:'discount2'},
  ]
  discountitem: any;
  constructor(private router: Router){}
  redirectRingsPage(event: Event): void{
    this.router.navigate(['/rings']);
  }
  redirectNecklacesPage(event: Event){
    this.router.navigate( ['/necklaces']);
  }
  redirectEarringsPage(event:Event){
    this.router.navigate(['/earrings']);
  }
  redirectBraceletPage(event:Event){
    event.preventDefault();
    this.router.navigate(['/bracelet']);
  }
  protected readonly Constant = Constant;
}
