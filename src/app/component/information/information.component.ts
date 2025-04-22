import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Constant } from '../../constants/contants';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule,InformationComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  Constant = Constant;

}
