import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-personelinformation',
    imports: [CommonModule, MatTabsModule, DatePipe],
    templateUrl: './personelinformation.component.html',
    styleUrl: './personelinformation.component.css'
})
export class PersonelinformationComponent {

    tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

}
