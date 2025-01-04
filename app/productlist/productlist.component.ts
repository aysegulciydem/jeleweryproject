import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, products } from '../products';
import { RingsComponent } from '../rings/rings.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DataService } from '../service/data.service';
const ELEMENT_DATA: Product[] = [];

@Component({
  schemas: [(CUSTOM_ELEMENTS_SCHEMA)],
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule, RingsComponent, MatTableModule,MatCheckboxModule, MatTableModule, MatCheckboxModule],
  providers: [DataService],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit{
  products: Product[] = []; 
  @Input() selectedProduct : Product | null = null; 
  data: any;
  newData: Product | null;
 

  constructor(
    private dataService: DataService,
  ){
    
  }
  ngOnInit(): void {
    this.selectedProduct = this.dataService.getData();
    console.log(this.selectedProduct);
  
  }
 

  

  
  
  
  // displayedColumns: string[] = ['select', 'id', 'name', 'price', 'imageUrl'];
  // dataSource = new MatTableDataSource<Product>(ELEMENT_DATA);
  // selection = new SelectionModel<Product>(true, []);
  // /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }
  // /** Selects all rows if they are not all selected; otherwise clear selection. */
  // toggleAllRows() {
  //   if (this.isAllSelected()) {
  //     this.selection.clear();
  //     return;
  //   }

  //   this.selection.select(...this.dataSource.data);
  // }
  // /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: Product): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  // }""
  
  

  
}
