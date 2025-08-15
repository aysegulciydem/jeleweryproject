import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FavoriteComponent } from './favorite/favorite.component';
import { AccountComponent } from './account/account.component';
import { PersonelinformationComponent } from './personelinformation/personelinformation.component';
import { MessageComponent } from './message/message.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { MessagebadgeService } from '../../services/messagebadge/messagebadge.service';

@Component({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true,
    selector: 'app-favorite-page',
    imports: [
        CommonModule,
        FavoriteComponent,
        AccountComponent,
        PersonelinformationComponent,
        MessageComponent, 
        MatBadgeModule, 
        MatButtonModule, 
        MatIconModule
    ],
    templateUrl: './favorite-page.component.html',
    styleUrl: './favorite-page.component.css'
})
export class FavoritePageComponent {
  hidden = false;
  currentSection: string = 'favorites';
  messageCount = 0;
  constructor(private messagebadgeservice: MessagebadgeService) {
    this.messagebadgeservice.messageCount$.subscribe(count => {
      this.messageCount = count;
    });
  }
  setSection(section: string) {
    this.currentSection = section;
  }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
