import { Component, Inject, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions, MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import { Product} from "../../../model/products";
import { CommonModule } from '@angular/common';

@Component({
  schemas: [NO_ERRORS_SCHEMA],
  selector: 'app-bracelet-detail-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatButton,
    MatDialogClose,
    CommonModule
  ],
  templateUrl: './bracelet-detail-dialog.component.html',
  styleUrl: './bracelet-detail-dialog.component.css'
})
export class BraceletDetailDialogComponent {
 
 constructor(
      private readonly matDialogRef: MatDialogRef<BraceletDetailDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public dialogData: Product,
    ) {
    }
    closeDialogComponent() {
      this.matDialogRef.close();
    }
}
