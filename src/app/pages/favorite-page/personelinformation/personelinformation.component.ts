import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({  
  selector: 'app-personelinformation',
  standalone: true,
  imports: [MatTabsModule,CommonModule,BrowserAnimationsModule,MatFormFieldModule, MatInputModule,],
  templateUrl: './personelinformation.component.html',
  styleUrl: './personelinformation.component.css'
})
export class PersonelinformationComponent {

}
