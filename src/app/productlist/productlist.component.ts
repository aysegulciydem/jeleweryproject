import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, products } from '../products';
import { RingsComponent } from '../rings/rings.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BasketcardService } from '../services/basketcard.service';
@Component({
  schemas: [(CUSTOM_ELEMENTS_SCHEMA)],
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule, RingsComponent, MatTableModule,MatCheckboxModule],
  providers: [BasketcardService],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit{
  cardItems: Product [] = [];
  addProduct: any;
  product: any;
  products: Product[];
  displayedColumns: string[] = ['select', 'name', 'price', 'currentImage'];
  dataSource = new MatTableDataSource<Product>([]);
  selection = new SelectionModel<Product>(true, []);
  constructor(private basketcardService:BasketcardService){
    this.dataSource = new MatTableDataSource(this.products);
  }
  ngOnInit(): void {
    // Sepet değişikliklerini dinle
    this.basketcardService.card$.subscribe(items => {
      //this.dataSource.data = items;
      this.products = items;
      console.log('Tablo güncellendi:', items);
    });
  }

  onItemClicked(product: Product) {
    // Ürün bilgilerini tabloya ekle
    this.dataSource.data.push(product);
    this.dataSource.filter = '';
  }
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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }

  
}
