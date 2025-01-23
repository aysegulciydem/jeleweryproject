import {Component, Inject} from '@angular/core';
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
  selector: 'app-product-detail-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './product-detail-dialog.component.html',
  styleUrl: './product-detail-dialog.component.css'
})
export class ProductDetailDialogComponent {

  constructor(
    private readonly matDialogRef: MatDialogRef<ProductDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: Product,
  ) {
  }

  closeDialogComponent() {
    this.matDialogRef.close();
  }
}
