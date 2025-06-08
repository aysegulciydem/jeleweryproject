import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FavoriteComponent } from './favorite/favorite.component';
import { AccountComponent } from './account/account.component';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-favorite-page',
  standalone: true,
  imports: [
    CommonModule,
    FavoriteComponent,
    AccountComponent
  ],
  templateUrl: './favorite-page.component.html',
  styleUrl: './favorite-page.component.css'
})
export class FavoritePageComponent {
  currentSection: string = 'favorites';
  setSection(section: string) {
    this.currentSection = section;
  }

}
