import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RingService} from "../ring.service";
import { Product } from '../../../model/products';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-productList',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCheckboxModule],
  providers: [],
  templateUrl: './productList.component.html',
  styleUrl: './productList.component.css',
  encapsulation: ViewEncapsulation.None,
})

export class ProductListComponent {
  products: Product [] = [];
  public readonly data: Product | void

  constructor(private readonly ringService: RingService){
    this.data = this.ringService.getData();
    console.log(this.data)
  }

  displayedColumns: string[] = ['select', 'id', 'name', 'price', 'imageUrl'];
  dataSource = new MatTableDataSource<Product>(this.products);
  selection = new SelectionModel<Product>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Product): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}
