import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule, NgIfContext } from '@angular/common';
import {MatToolbar} from "@angular/material/toolbar";
import {Router} from "@angular/router";
import {Product, products} from "../../model/products";
import {Constant} from "../../constants/contants";
import {MatDialog} from "@angular/material/dialog";
import {ProductDetailDialogComponent} from "./product-detail-dialog/product-detail-dialog.component";
import { ProductlistserviceService } from '../../services/productlistservice.service';
import {FormGroupDirective,NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import{MatDrawer, MatSidenav} from '@angular/material/sidenav';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}
@Component({
  schemas: [(CUSTOM_ELEMENTS_SCHEMA)],
  selector: 'app-rings',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatDividerModule,
    CommonModule,
    MatToolbar,
    ReactiveFormsModule, 
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatSelectModule,
    MatSliderModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    
  ],
  providers: [{provide: MatPaginatorIntl}],
  templateUrl: './rings.component.html',
  styleUrl: './rings.component.css'
})
export class RingsComponent{
  protected readonly Constant = Constant;
  products: any = products;
  isToggleOpen: boolean = false;
  value: any;
  showFiller = false;
  noProducts: TemplateRef<NgIfContext<boolean>>;
  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
  
  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
  matcher = new MyErrorStateMatcher();
  
  readonly task = signal<Task>({
    name: 'Color',
    completed: false,
    subtasks: [
      {name: 'Gold', completed: false},
      {name: 'Grey', completed: false},
      {name: 'White', completed: false},
    ],
  });
  readonly partiallyComplete = computed(() => {
    const task = this.task();
    if (!task.subtasks) {
      return false;
    }
    return task.subtasks.some(t => t.completed) && !task.subtasks.every(t => t.completed);
  });
  update(completed: boolean, index?: number) {
    this.task.update(task => {
      if (index === undefined) {
        task.completed = completed;
        task.subtasks?.forEach(t => (t.completed = completed));
      } else {
        task.subtasks![index].completed = completed;
        task.completed = task.subtasks?.every(t => t.completed) ?? true;
      }
      return {...task};
    });
  }
  constructor(
    private readonly matDialog: MatDialog,
    private readonly router: Router,
    private readonly productlistservice: ProductlistserviceService,
  )
  {
    this.products.forEach(product => {
      product.currentImage = product.imageUrl[0];
    });
  }
  addToCard(product: Product): void {
    this.productlistservice.addToBasket(product);
    const goToCart = confirm("Product added to basket! Would you like to go to basket?");
    if(goToCart) {
      this.router.navigate(['/productList']);
    }
  }
  @ViewChild('drawer') drawer!: MatDrawer;
  toggleDrawer() {
    this.drawer.toggle();
  }
  openProductDetailDialogComponent(product: Product): void {
    this.matDialog.open(ProductDetailDialogComponent,
      {
        data: product,
        disableClose: true
      }
    );
  }
  onMouseEnter(product: Product): void {
    // İkinci resmi göster
    product.currentImage = product.imageUrl[1];
  }
  onMouseLeave(product: Product): void {
    // İlk resmi geri yükle
    product.currentImage = product.imageUrl[0];
  } 
  toggleFilter() {
    this.isToggleOpen = !this.isToggleOpen;
  }
  
}
