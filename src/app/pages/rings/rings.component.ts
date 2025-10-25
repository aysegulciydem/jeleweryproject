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
import { MultiCheckboxComponent } from '../../component/multi-checkbox/multi-checkbox.component';
import { MatSnackBar } from '@angular/material/snack-bar';
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
        MultiCheckboxComponent
    ],
    providers: [{ provide: MatPaginatorIntl }],
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
  constructor(
    private readonly matDialog: MatDialog,
    private readonly router: Router,
    private readonly productlistservice: ProductlistserviceService,
    private snackBar: MatSnackBar,
  )
  {
    this.products.forEach(product => {
      product.currentImage = product.imageUrl[0];
    });
  }
  ngOnInit(): void {
    this.productlistservice.initFavorites();
  }
  addToCard(product: Product): void {
    this.productlistservice.addToBasket(product);
    this.snackBar.open('Product added to shopping list!', 'Close', {
      duration: 2000,
      verticalPosition: 'top',          
      horizontalPosition: 'center',
      panelClass: ['custom-snackbar']
    });
  }
  @ViewChild('drawer') drawer!: MatDrawer;
  toggleFavorite(product: Product): void {
    const wasFavorite = this.productlistservice.isProductInFavorites(product);
    this.productlistservice.toggleFavorite(product);
      if (wasFavorite) {
        this.snackBar.open('Product removed from favorite list!', 'Close', {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: ['custom-snackbar']
        });
      } else {
        this.snackBar.open('Product added to favorite list!', 'Close', {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: ['custom-snackbar']
        });
      }
  }
  isFavorite(product: Product): boolean {
   return this.productlistservice.isProductInFavorites(product);
  }
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
    product.currentImage = product.imageUrl[1];
  }
  onMouseLeave(product: Product): void {
    product.currentImage = product.imageUrl[0];
  } 
  toggleFilter() {
    this.isToggleOpen = !this.isToggleOpen;
  }
  
}
