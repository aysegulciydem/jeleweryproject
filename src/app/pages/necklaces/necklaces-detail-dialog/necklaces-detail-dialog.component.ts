import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions, MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {Product} from "../../../model/products";
@Component({
  selector: 'app-necklaces-detail-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './necklaces-detail-dialog.component.html',
  styleUrl: './necklaces-detail-dialog.component.css'
})
export class NecklacesDetailDialogComponent {
  constructor(
      private readonly matDialogRef: MatDialogRef<NecklacesDetailDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public dialogData: Product,
    ) {
    }
  
    closeDialogComponent() {
      this.matDialogRef.close();
    }
}
