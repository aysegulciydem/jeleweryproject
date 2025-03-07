import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  schemas: [NO_ERRORS_SCHEMA],
  selector: 'app-discountcarousel',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './discountcarousel.component.html',
  styleUrl: './discountcarousel.component.css'
})
export class DiscountcarouselComponent {
  @Input() discountslide: DiscountSliderImages[]=[];
  currentSlide: number = 0 
  discountitem: any;
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.discountslide.length - 1 : previous;
    console.log("previous clicked, new current discountitem is: ", this.currentSlide);
  }
  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.discountslide.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
}
export interface DiscountSliderImages{
  id:number,
  src: string,
  alt:string,
}