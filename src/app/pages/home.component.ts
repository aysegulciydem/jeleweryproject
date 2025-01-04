import { Component, ViewChild, ElementRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarouselComponent } from '../component/carousel/carousel.component';

@Component({
   schemas: [NO_ERRORS_SCHEMA],
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterModule, NavbarComponent, MatCardModule, MatButtonModule, MatDividerModule, CommonModule, CarouselComponent]
})


export class HomeComponent {
  images = [
    {
      src: 'https://www.toljewellery.com/wp-content/uploads/2022/11/tol-bridal-bg-1500x352.webp' ,
      alt: 'picture1',
    },
    {
      src: 'https://www.toljewellery.com/wp-content/uploads/2022/11/tol-earrings-bg.webp',
      alt: 'picture2',
    },
    {
      src: 'https://www.toljewellery.com/wp-content/uploads/2022/11/tol-symbolic-jewellery-01.webp',
      alt: 'picture3'
    },
    {
      src: 'https://www.toljewellery.com/wp-content/uploads/2022/11/tol-bridal-10.webp',
      alt: 'picture4'
    },
    {
      src: 'https://dam.bluenile.com/images/public/24298/Gold_and_Lab_Grown_Diamond_Jewelry.jpeg',
      alt: 'picture5'
    }
  ]

  constructor(private router: Router){}
  onRings(event: Event): void{
    event.preventDefault();
    this.router.navigate(['/rings']);
  }
  onNecklaces(event:Event){
    event.preventDefault();
    this.router.navigate( ['/necklaces']);
  }
  onEarrings(event:Event){
    event.preventDefault();
    this.router.navigate(['/earrings']);
  }
  onBracelet(event:Event){
    event.preventDefault();
    this.router.navigate(['/bracelet']);
  }

}
