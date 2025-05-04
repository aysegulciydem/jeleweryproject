import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions, MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {ProductEarring} from "../../../model/products";

@Component({
  selector: 'app-earrings-detail-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './earrings-detail-dialog.component.html',
  styleUrl: './earrings-detail-dialog.component.css'
})
export class EarringsDetailDialogComponent {
  constructor(
      private readonly matDialogRef: MatDialogRef<EarringsDetailDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public dialogData: ProductEarring,
    ) {
    }
  
    closeDialogComponent() {
      this.matDialogRef.close();
    }
}
